import { FC } from 'react';
import {
    Box,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography,
} from '@mui/material';
import { CollectionFieldsTablePropsType } from '../../types/common.types';
import ButtonWithIcon from '../../../../components/ButtonWithIcon';
import CustomFab from '../../../../components/CustomFab';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';
import {
    dataCardTooltipsConfig,
    dataCardTableConfig,
} from '../../configs/content.config';
import { getFieldTypeValue } from '../../utils/helpers.util';

const CollectionFieldsTable: FC<CollectionFieldsTablePropsType> = ({
    fields,
    isEditable,
    handleEdit,
    handleDelete,
    openNewFieldsForm,
}) => {
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                px: 2,
            }}
        >
            <Typography
                variant="subtitle1"
                component="span"
                color="text.secondary"
                alignSelf="flex-start"
            >
                {t(dataCardTableConfig.title)}
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">
                            {t(dataCardTableConfig.number)}
                        </TableCell>
                        <TableCell align="left">
                            {t(dataCardTableConfig.type)}
                        </TableCell>
                        <TableCell align="left">
                            {t(dataCardTableConfig.label)}
                        </TableCell>
                        {isEditable && (
                            <>
                                <TableCell padding="checkbox" />
                                <TableCell padding="checkbox" />
                            </>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {fields.map((field, index) => (
                        <TableRow key={field.id}>
                            <TableCell padding="checkbox">
                                {index + 1}
                            </TableCell>
                            <TableCell align="left">
                                {t(getFieldTypeValue(field.type))}
                            </TableCell>
                            <TableCell align="left">{field.label}</TableCell>
                            {isEditable && (
                                <>
                                    <TableCell padding="checkbox">
                                        <ButtonWithIcon
                                            color="primary"
                                            icon={EditIcon}
                                            tooltip={t(
                                                dataCardTooltipsConfig.editField
                                            )}
                                            handleClick={() =>
                                                handleEdit(field)
                                            }
                                        />
                                    </TableCell>
                                    <TableCell padding="checkbox">
                                        <ButtonWithIcon
                                            color="error"
                                            icon={DeleteIcon}
                                            tooltip={t(
                                                dataCardTooltipsConfig.deleteField
                                            )}
                                            handleClick={() =>
                                                handleDelete(field.id)
                                            }
                                        />
                                    </TableCell>
                                </>
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {isEditable && (
                <CustomFab
                    size="small"
                    color="primary"
                    icon={<AddIcon />}
                    tooltip={t(dataCardTooltipsConfig.addField)}
                    handleClick={openNewFieldsForm}
                    sx={{ transform: 'scale(0.9)' }}
                />
            )}
        </Box>
    );
};

export default CollectionFieldsTable;
