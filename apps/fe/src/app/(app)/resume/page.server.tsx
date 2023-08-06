// 'use client';

import { FC, use, useEffect, useMemo, useState } from 'react';
import { GitHub } from '@mui/icons-material';
import { Grid, IconButton, styled, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';

import { ResumeQuery } from '@/graphql/graphql';
import getResume from '@/graphql/queries/getResume.gql';

import ResumeClient from './page.client';

export interface ResumeServerProps {
  children: typeof ResumeClient;
}

export default async function ResumeServer({ children: Children }: ResumeServerProps) {
  const data = await request<ResumeQuery>(process.env.NEXT_PUBLIC_API_URL, getResume);

  return <Children data={data.resume} />;
}
