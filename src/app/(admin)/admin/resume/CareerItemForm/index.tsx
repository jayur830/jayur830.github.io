import { useCallback, useEffect, useMemo } from 'react';
import { Controller, useController, useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@apollo/client';
import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Button, Checkbox, Chip, Grid, ListItem, styled, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { omit } from 'lodash';
import MDEditor from '@uiw/react-md-editor';

import { FormItem } from '@/components';
import { logoValues } from '@/configs/logo';
import { useAlert } from '@/contexts/AlertProvider';
import { GetTechListQuery, TechLogo, UpdateHistoryDetailMutation, UpdateHistoryDetailMutationVariables } from '@/graphql/graphql';
import UPDATE_HISTORY_DETAIL_MUTATION from '@/graphql/mutations/updateHistoryDetail.gql';
import GET_TECH_LIST_QUERY from '@/graphql/queries/getTechList.gql';
import { useCommonState } from '@/store/common';

import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

import { ResumeHistoryDetailFormData } from '../types';

export interface CareerItemFormProps {
  historyDetailId: string;
  groupName?: string | null;
  name: string;
  startDate: Dayjs;
  endDate?: Dayjs | null;
  techList: TechLogo[];
  description: string;
}

export default function CareerItemForm({ historyDetailId, groupName, name, startDate, endDate, techList, description }: CareerItemFormProps) {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  const isDarkMode = useCommonState((state) => state.isDarkMode);
  const setLoading = useCommonState((state) => state.setLoading);
  const { openAlert } = useAlert();

  const { control, watch, setValue, resetField, handleSubmit } = useForm<ResumeHistoryDetailFormData>({
    mode: 'all',
    defaultValues: {
      groupName: groupName || undefined,
      name,
      isWorking: !endDate,
      startDate,
      endDate: {
        value: endDate || dayjs(),
        minDate: startDate,
      },
      keyword: '',
      techList,
      description,
    },
  });

  const {
    field: { value: isWorking },
  } = useController({ control, name: 'isWorking' });

  const {
    field: { value: keywordValue, onChange: onChangeKeyword },
  } = useController({ control, name: 'keyword' });

  const {
    field: { value: techListValue, onChange: onChangeTechList },
  } = useController({ control, name: 'techList' });

  const { data: techListData } = useQuery<GetTechListQuery>(GET_TECH_LIST_QUERY, {
    variables: {
      keyword: keywordValue,
    },
  });

  const [updateHistoryDetail, { loading }] = useMutation<UpdateHistoryDetailMutation, UpdateHistoryDetailMutationVariables>(UPDATE_HISTORY_DETAIL_MUTATION, {
    onCompleted() {
      openAlert({
        open: true,
        autoHideDuration: 7000,
        message: '이력서 회사 정보가 수정되었습니다.',
      });
    },
    onError(error) {
      openAlert({
        open: true,
        autoHideDuration: 7000,
        message: error.message,
      });
    },
  });

  const techListOptions = useMemo(() => {
    if (keywordValue.length > 0 && techListData) {
      return techListData.techList
        .filter((tech) => !techListValue.includes(tech))
        .map((tech, i) => ({
          key: `${i}`,
          label: logoValues[tech].label,
          value: tech,
        }));
    }

    return [];
  }, [techListData, techListValue, keywordValue]);

  const onSubmit = useCallback(
    (data: ResumeHistoryDetailFormData) => {
      updateHistoryDetail({
        variables: {
          input: {
            ...omit(data, 'groupName', 'isWorking', 'keyword', 'startDate', 'endDate'),
            historyDetailId,
            group: data.groupName,
            startDate: data.startDate.format('YYYY-MM'),
            endDate: data.endDate && data.endDate.value ? data.endDate.value.format('YYYY-MM') : null,
          },
        },
      });
    },
    [updateHistoryDetail, historyDetailId],
  );

  useEffect(() => {
    watch(['isWorking']);
    return watch((value, { name }) => {
      switch (name) {
        case 'isWorking':
          setValue(
            'endDate',
            value[name]
              ? undefined
              : {
                  value: dayjs(),
                  minDate: value.startDate as Dayjs,
                },
          );
          break;
        default:
          break;
      }
    }).unsubscribe;
  }, [setValue, watch]);

  useEffect(() => {
    setLoading(loading);
  }, [setLoading, loading]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledAccordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Grid width="100%">
            <FormItem label="GROUP">
              <Controller
                control={control}
                name="groupName"
                render={({ field: { value, onChange } }) => (
                  <TextField
                    variant="standard"
                    fullWidth
                    value={value || ''}
                    onChange={onChange}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  />
                )}
              />
            </FormItem>
            <FormItem label="프로젝트 제목">
              <Controller
                control={control}
                name="name"
                rules={{
                  required: {
                    value: true,
                    message: '프로젝트 제목은 필수입니다.',
                  },
                }}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                  <TextField
                    variant="standard"
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                    value={value || ''}
                    onChange={onChange}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  />
                )}
              />
            </FormItem>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <FormItem label="프로젝트 기간">
            <Grid
              container
              flexDirection="row"
              alignItems="center"
              width="fit-content"
            >
              <Typography
                fontSize={14}
                letterSpacing={-0.3}
              >
                진행 중
              </Typography>
              <Controller
                control={control}
                name="isWorking"
                render={({ field: { value, onChange } }) => (
                  <Checkbox
                    checked={value}
                    onChange={onChange}
                  />
                )}
              />
            </Grid>
            <Controller
              control={control}
              name="startDate"
              rules={{
                required: {
                  value: true,
                  message: '시작 날짜는 필수입니다.',
                },
              }}
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <DatePicker
                  format="YYYY-MM"
                  openTo="month"
                  views={['year', 'month']}
                  value={dayjs(value)}
                  onChange={onChange}
                  slotProps={{
                    textField: {
                      error: !!error,
                      helperText: error?.message,
                    },
                  }}
                />
              )}
            />
            {!isWorking && (
              <>
                ~
                <Controller
                  control={control}
                  name="endDate"
                  rules={{
                    required: {
                      value: true,
                      message: '종료 날짜는 필수입니다.',
                    },
                  }}
                  render={({ field: { value, onChange }, fieldState: { error } }) => (
                    <DatePicker
                      format="YYYY-MM"
                      openTo="month"
                      views={['year', 'month']}
                      minDate={value?.minDate}
                      value={dayjs(value?.value)}
                      onChange={(date) => onChange({ ...value, value: date })}
                      slotProps={{
                        textField: {
                          error: !!error,
                          helperText: error?.message,
                        },
                      }}
                    />
                  )}
                />
              </>
            )}
          </FormItem>
          <FormItem label="사용 기술 (라이브러리, 프레임워크 등)">
            <>
              <Autocomplete
                freeSolo
                sx={sm ? { width: '100%' } : { flex: 1 }}
                options={techListOptions}
                key="autoComplete"
                onChange={(_, v) => {
                  const value = v as (typeof techListOptions)[number];
                  if (value && typeof value !== 'string' && !techList.includes(value.value)) {
                    onChangeKeyword({ target: { value: value.label } });
                  }
                }}
                renderOption={(props, option) => (
                  <ListItem
                    {...props}
                    key={option.key}
                  >
                    {option.label}
                  </ListItem>
                )}
                renderInput={(props) => (
                  <TechListSearchField
                    {...props}
                    variant="standard"
                    fullWidth={sm}
                    placeholder="React"
                    value={keywordValue || ''}
                    onChange={onChangeKeyword}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        const tech = techListOptions.find(({ label }) => label === keywordValue)?.value;
                        if (tech) {
                          console.log('techListOptions:', techListOptions);
                          onChangeTechList([...techListValue, tech]);
                          resetField('keyword');
                        }
                      }
                    }}
                  />
                )}
              />
              <Grid
                container
                gap={1}
                flexWrap="wrap"
              >
                {techListValue.map((techName, i) => (
                  <Chip
                    key={i}
                    label={logoValues[techName].label}
                    onDelete={() => {
                      onChangeTechList(techListValue.filter((v) => v !== techName));
                    }}
                    onClick={() => {
                      onChangeTechList(techListValue.filter((v) => v !== techName));
                    }}
                  />
                ))}
              </Grid>
            </>
          </FormItem>
          <FormItem label="설명">
            <Controller
              control={control}
              name="description"
              render={({ field: { value, onChange } }) => (
                <DescriptionEditor
                  value={value}
                  onChange={onChange}
                  data-color-mode={isDarkMode ? 'dark' : 'light'}
                >
                  <MDEditor.Markdown
                    source={value}
                    style={{ whiteSpace: 'pre-line' }}
                  />
                </DescriptionEditor>
              )}
            />
          </FormItem>
          <Grid
            container
            justifyContent="flex-end"
            paddingTop={2}
          >
            <Button
              variant="outlined"
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </AccordionDetails>
      </StyledAccordion>
    </form>
  );
}

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: `0 0 10px 3px ${theme.palette.mode === 'light' ? grey['300'] : grey['A700']}`,
  transition: 'background-color 0.3s ease',
  '.Mui-focusVisible': {
    backgroundColor: 'transparent',
  },
}));

const TechListSearchField = styled(TextField)(({ fullWidth }) => ({
  display: 'flex',
  flex: fullWidth ? undefined : 1,
}));

const DescriptionEditor = styled(MDEditor)((props) => ({
  backgroundColor: props['data-color-mode'] === 'dark' ? '#131313' : '#FFFFFF',
  width: '100%',
  minHeight: 500,
  height: '100%',
  transition: 'background-color 0.3s ease',
  '.w-md-editor-toolbar, .wmde-markdown': {
    backgroundColor: props['data-color-mode'] === 'dark' ? '#131313' : '#FFFFFF',
    transition: 'background-color 0.3s ease',
  },
}));
