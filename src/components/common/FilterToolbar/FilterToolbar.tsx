import { CreateButton, FilterButton, FilterForm } from 'react-admin';
import { Stack, Box } from '@mui/material';
import { IFilterToolbarProps } from './IFilterToolbar';

const FilterToolbar = (props: IFilterToolbarProps) => {
  const { filters } = props;
  return (
    <Stack
      sx={{ display: 'flex', alignItems: 'center' }}
      direction="row"
      justifyContent="space-between"
    >
      <FilterForm filters={filters} />
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          paddingRight: '1rem',
        }}
      >
        <FilterButton
          className="al-filter-toolbar__filter-button"
          filters={filters}
          disableSaveQuery
        />
        <CreateButton variant="contained" />
      </Box>
    </Stack>
  );
};

export default FilterToolbar;
