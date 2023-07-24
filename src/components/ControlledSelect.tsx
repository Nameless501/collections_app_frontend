import { FC, ChangeEvent } from 'react';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Checkbox,
    ListItemText,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ControlledSelectPropsType } from '../types/props.types';

const ControlledSelect: FC<ControlledSelectPropsType> = ({
    config,
    multiple,
    control,
    size,
}) => {
    const { t } = useTranslation();

    const getSelectedOptionName = (selected: string) => {
        const option = config.options.find(
            (option) => option.value === selected
        );
        if (typeof option === 'object') {
            return option.name;
        }
    };

    const renderSelected = (selected: string | string[]) => {
        if (typeof selected === 'string') {
            return t(getSelectedOptionName(selected));
        }
        return selected
            .map((option) => t(getSelectedOptionName(option)))
            .join(', ');
    };

    const setIsChecked = (inputValues: unknown, currentValue: string) => {
        if (Array.isArray(inputValues)) {
            return inputValues.includes(currentValue);
        }
        return false;
    };

    return (
        <FormControl sx={{ width: '100%' }} size={size}>
            <InputLabel id={config.id}>{t(config.label)}</InputLabel>
            <Controller
                control={control}
                name={config.name}
                render={({ field: { onChange, value: inputValues, ref } }) => (
                    <Select
                        inputRef={ref}
                        labelId={config.id}
                        label={t(config.label)}
                        multiple={multiple}
                        value={inputValues}
                        onChange={(evt) =>
                            onChange(evt as ChangeEvent<Element>)
                        }
                        renderValue={(selected) => renderSelected(selected)}
                        MenuProps={{
                            PaperProps: {
                                style: {
                                    maxHeight: 300,
                                },
                            },
                        }}
                    >
                        {config.options.map(({ value, name }) => (
                            <MenuItem key={value} value={value}>
                                {multiple && (
                                    <Checkbox
                                        checked={setIsChecked(
                                            inputValues,
                                            value
                                        )}
                                    />
                                )}
                                <ListItemText primary={t(name)} />
                            </MenuItem>
                        ))}
                    </Select>
                )}
            />
        </FormControl>
    );
};

export default ControlledSelect;
