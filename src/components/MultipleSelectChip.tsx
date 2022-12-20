/** @jsxImportSource @emotion/react */
'use client'
import { FC, useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import { Theme, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import { css } from '@emotion/react'

// type
import { CategoryJson } from '~/types'
import { useRouter } from 'next/navigation'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
}

const getStyles = (name: string, categoryName: readonly string[], theme: Theme) => {
  return {
    fontWeight:
      categoryName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

type Props = {
  field: string
  labelName: string
  categoryItemList: CategoryJson[]
}

const MultipleSelectChip = forwardRef<{ resetCategories: () => void }, Props>(function SelectChip(
  { field, labelName, categoryItemList },
  ref,
) {
  const theme = useTheme()
  const router = useRouter()

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event
    router.replace('/?hoge=111')
    // changeHandler(typeof value === 'string' ? value.split(',') : value);
  }

  useImperativeHandle(ref, () => ({ resetCategories: () => setCategoryName([]) }))

  return (
    <FormControl sx={{ width: '32%' }}>
      <InputLabel
        id="demo-multiple-chip-label"
        css={css`
          background: #fff;
        `}
      >
        {labelName}
      </InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        MenuProps={MenuProps}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
      >
        {categoryItemList.map((item) => (
          <MenuItem
            key={item.slug}
            value={item.label}
            css={css`
                font-weight: {categoryName.indexOf(name) === -1};
            `}
            style={getStyles(item.label, categoryName, theme)}
          >
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
})

export default MultipleSelectChip
