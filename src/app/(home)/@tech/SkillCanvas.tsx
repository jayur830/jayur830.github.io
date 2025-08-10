'use client';

import type { CSSProperties } from 'react';
import { useEffect, useRef, useState } from 'react';

interface LogoProps {
  src: string; // 이미지 경로
  width: number; // 이미지 너비
}

interface LogoState {
  x: number;
  y: number;
  width: number;
  height: number;
  isDragging: boolean;
  offsetX: number;
  offsetY: number;
  vx: number;
  vy: number;
  rotation: number; // 현재 회전 각도 (라디안)
  rotationSpeed: number; // 회전 속도
}

export interface SkillCanvasProps {
  logos: LogoProps[]; // 로고 배열
  aspectRatio?: number; // 캔버스의 가로 세로 비율 (기본값: 16:9)
  style?: CSSProperties; // 캔버스 스타일
}

export default function SkillCanvas({
  logos,
  aspectRatio = 16 / 9, // 기본 비율 16:9
  style = {}, // 사용자 정의 스타일
}: SkillCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const logoStates = useRef<LogoState[]>([]); // 로고 상태 배열
  const images = useRef<HTMLImageElement[]>([]);
  const [canvasSize, setCanvasSize] = useState<{ width: number; height: number }>({
    width: 1392,
    height: 783,
  });

  // 물리 엔진 설정값
  const dragFriction = 0.98; // 드래그 관성 감소율 (높은 관성을 위해 완만하게 설정)
  const collisionRotationFriction = 0.9; // 충돌 시 회전 감속 비율 (빠르게 감소)
  const bounce = 0.8; // 벽 충돌 반응
  const velocityThreshold = 0.02; // 속도 임계값

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const newWidth = Math.min(viewportWidth * 0.9, 1392); // 최대 너비 1392px로 제한
      const newHeight = newWidth / aspectRatio; // 비율에 따라 높이 계산

      // 기존 크기와 새 크기의 비율 계산
      const widthRatio = newWidth / canvasSize.width;
      const heightRatio = newHeight / canvasSize.height;

      // 로고 위치를 새 크기에 맞게 조정
      logoStates.current.forEach((logo) => {
        logo.x *= widthRatio;
        logo.y *= heightRatio;
      });

      setCanvasSize({ width: newWidth, height: newHeight });
    };

    // 초기 크기 설정
    handleResize();

    // 리사이즈 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [aspectRatio, canvasSize.width, canvasSize.height]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 로고 이미지 로드 및 초기 상태 설정
    logos.forEach((logo, index) => {
      const img = new Image();
      img.src = logo.src;
      img.onload = () => {
        const aspectRatio = img.height / img.width;
        const logoWidth = logo.width; // Props에서 받은 width 사용
        const logoHeight = logoWidth * aspectRatio; // 비율에 따른 높이 계산

        const randomX = Math.random() * (canvas.width - logoWidth);
        const randomY = Math.random() * (canvas.height - logoHeight);

        images.current[index] = img;

        // 초기 상태 설정
        logoStates.current[index] = {
          x: randomX,
          y: randomY,
          width: logoWidth,
          height: logoHeight,
          isDragging: false,
          offsetX: 0,
          offsetY: 0,
          vx: 0,
          vy: 0,
          rotation: 0,
          rotationSpeed: 0,
        };

        drawCanvas(); // 모든 이미지가 로드될 때마다 캔버스 그리기
      };
    });

    const handleGlobalMouseUp = () => {
      logoStates.current.forEach((logo) => (logo.isDragging = false));
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    startAnimation(); // 관성 및 회전 처리 애니메이션 시작

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [logos]);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    logoStates.current.forEach((logo, index) => {
      const img = images.current[index];
      if (img) {
        ctx.save();
        ctx.translate(logo.x + logo.width / 2, logo.y + logo.height / 2);
        ctx.rotate(logo.rotation);
        ctx.drawImage(img, -logo.width / 2, -logo.height / 2, logo.width, logo.height);
        ctx.restore();
      }
    });
  };

  const startAnimation = () => {
    const cooldownMap = new Map<string, number>(); // 충돌 쿨다운 관리

    const animate = (timestamp: number) => {
      const canvas = canvasRef.current;

      if (!canvas) return;

      // 관성 및 벽 충돌 처리
      logoStates.current.forEach((logo) => {
        if (!logo.isDragging) {
          // 이동 관성 감소율
          logo.vx *= dragFriction;
          logo.vy *= dragFriction;
          logo.x += logo.vx;
          logo.y += logo.vy;

          // 회전 관성 감소율 (충돌 회전)
          logo.rotationSpeed *= collisionRotationFriction;
          logo.rotation += logo.rotationSpeed;

          // 벽 충돌 처리
          if (logo.x <= 0 || logo.x + logo.width >= canvas.width) {
            logo.vx *= -bounce;
            logo.x = Math.max(0, Math.min(logo.x, canvas.width - logo.width));
          }

          if (logo.y <= 0 || logo.y + logo.height >= canvas.height) {
            logo.vy *= -bounce;
            logo.y = Math.max(0, Math.min(logo.y, canvas.height - logo.height));
          }

          if (Math.abs(logo.vx) < velocityThreshold) logo.vx = 0;
          if (Math.abs(logo.vy) < velocityThreshold) logo.vy = 0;
          if (Math.abs(logo.rotationSpeed) < velocityThreshold) logo.rotationSpeed = 0;
        }
      });

      // 충돌 처리 루프
      for (let i = 0; i < logoStates.current.length; i++) {
        for (let j = i + 1; j < logoStates.current.length; j++) {
          handleCollision(logoStates.current[i], logoStates.current[j], cooldownMap, timestamp);
        }
      }

      drawCanvas();
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  const handleCollision = (logoA: LogoState | undefined, logoB: LogoState | undefined, cooldownMap: Map<string, number>, timestamp: number) => {
    if (!logoA || !logoB) return;

    const dx = logoB.x + logoB.width / 2 - (logoA.x + logoA.width / 2);
    const dy = logoB.y + logoB.height / 2 - (logoA.y + logoA.height / 2);
    const distance = Math.sqrt(dx * dx + dy * dy);

    const minDistance = (logoA.width + logoB.width) / 2;

    if (distance < minDistance) {
      const angle = Math.atan2(dy, dx);
      const overlap = minDistance - distance;

      // 위치 강제 분리
      const separationFactor = 0.8;
      logoA.x -= Math.cos(angle) * overlap * separationFactor;
      logoA.y -= Math.sin(angle) * overlap * separationFactor;
      logoB.x += Math.cos(angle) * overlap * separationFactor;
      logoB.y += Math.sin(angle) * overlap * separationFactor;

      // 회전 속도 감소 설정
      const rotationAdjustmentA = (Math.random() - 0.5) * 0.05; // 충돌 회전 속도 축소
      const rotationAdjustmentB = (Math.random() - 0.5) * 0.05;
      logoA.rotationSpeed += rotationAdjustmentA;
      logoB.rotationSpeed += rotationAdjustmentB;

      // 충돌 속도 조정
      const totalVx = logoA.vx - logoB.vx;
      const totalVy = logoA.vy - logoB.vy;
      const speedAdjustmentFactor = 0.5;

      logoA.vx -= totalVx * bounce * speedAdjustmentFactor;
      logoA.vy -= totalVy * bounce * speedAdjustmentFactor;
      logoB.vx += totalVx * bounce * speedAdjustmentFactor;
      logoB.vy += totalVy * bounce * speedAdjustmentFactor;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    logoStates.current.forEach((logo) => {
      if (logo.isDragging) {
        const newX = Math.max(0, Math.min(mouseX - logo.offsetX, canvas.width - logo.width));
        const newY = Math.max(0, Math.min(mouseY - logo.offsetY, canvas.height - logo.height));

        const deltaX = newX - logo.x;
        const deltaY = newY - logo.y;

        const maxDragVelocity = 8; // 드래그 중 최대 속도 제한
        logo.vx = Math.max(-maxDragVelocity, Math.min(maxDragVelocity, deltaX));
        logo.vy = Math.max(-maxDragVelocity, Math.min(maxDragVelocity, deltaY));

        logo.x = newX;
        logo.y = newY;
      }
    });

    drawCanvas();
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    logoStates.current.forEach((logo) => {
      if (mouseX >= logo.x && mouseX <= logo.x + logo.width && mouseY >= logo.y && mouseY <= logo.y + logo.height) {
        logo.isDragging = true;
        logo.offsetX = mouseX - logo.x;
        logo.offsetY = mouseY - logo.y;
        logo.vx = 0;
        logo.vy = 0;
      }
    });
  };

  return <canvas ref={canvasRef} width={canvasSize.width} height={canvasSize.height} style={style} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} />;
}
