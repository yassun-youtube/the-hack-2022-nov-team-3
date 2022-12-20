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

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
}

type Props = {
  labelName: string
  categoryItemList: CategoryJson
  value: string[]
  changeHandler: (data: string[]) => void
}

const MultipleSelectChip: React.FC<Props> = function SelectChip({
  labelName,
  categoryItemList,
  value,
  changeHandler,
}) {
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const { target } = event
    changeHandler(typeof target.value === 'string' ? target.value.split(',') : target.value)
  }

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
        value={value}
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
        {Object.entries(categoryItemList).map((item) => (
          <MenuItem
            key={item[0]}
            value={item[1]}
            css={css`
              font-weight: ${value.includes(item[1]) ? 'bold' : 'normal'};
            `}
          >
            {item[1]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default MultipleSelectChip
