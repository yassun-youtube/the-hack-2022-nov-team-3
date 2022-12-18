/** @jsxImportSource @emotion/react */
'use client'
import { FC, useEffect, useState } from 'react'
import { Theme, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Chip from '@mui/material/Chip'

// type
import { CategoryJson } from '~/types'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
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
  labelName: string
  categoryItemList: CategoryJson[]
  changeHandler: (value: string[]) => string[]
}

const MultipleSelectChip: FC<Props> = ({ labelName, categoryItemList, changeHandler }) => {
  const theme = useTheme()
  const [categoryName, setCategoryName] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof categoryName>) => {
    const {
      target: { value },
    } = event
    setCategoryName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  return (
    <FormControl sx={{ width: '32%' }}>
      <InputLabel id="demo-multiple-chip-label">{labelName}</InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={categoryName}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {categoryItemList.map((item) => (
          <MenuItem
            key={item.slug}
            value={item.label}
            style={getStyles(item.label, categoryName, theme)}
          >
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default MultipleSelectChip
