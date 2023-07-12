import { FC, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
    FormControl,
    Select,
    MenuItem,
    Box,
    SelectChangeEvent,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { LocalesList } from '../configs/locales.config';

export const LocaleSelect: FC = () => {
    const { i18n } = useTranslation();

    const [locale, setLocale] = useState<LocalesList>(
        LocalesList[
            localStorage.getItem('locale') as keyof typeof LocalesList
        ] ?? LocalesList.en
    );

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleChange = (evt: SelectChangeEvent) => {
        const value = LocalesList[evt.target.value as keyof typeof LocalesList];
        localStorage.setItem('locale', value);
        setLocale(value);
    };

    const toggleOpen = (open: boolean) => {
        if (isOpen !== open) {
            setIsOpen(open);
        }
    };

    useEffect(() => {
        i18n.changeLanguage(locale);
    }, [locale, i18n]);

    return (
        <Box
            component="label"
            sx={{
                my: 1,
                py: 1,
                px: 2,
                display: 'flex',
                gap: 2,
                alignItems: 'center',
                '&:hover': {
                    cursor: 'pointer',
                    bgcolor: ({ palette }) => palette.action.hover,
                },
            }}
            onClick={() => toggleOpen(true)}
        >
            <LanguageIcon color="action" />
            <FormControl variant="standard" sx={{ mx: 1, minWidth: 120 }}>
                <Select
                    value={locale}
                    label="Locale"
                    sx={{ width: 'fit-content' }}
                    open={isOpen}
                    onClose={() => toggleOpen(false)}
                    onOpen={() => toggleOpen(true)}
                    onChange={handleChange}
                >
                    <MenuItem value={LocalesList.ru}>RU</MenuItem>
                    <MenuItem value={LocalesList.en}>EN</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};
