import { FC } from 'react';
import { Container, Stack, Box } from '@mui/material';
import Header from './Header';
import SideBarLeft from './SideBarLeft';
import SideBarRight from './SideBarRight';
import { ChildrenPropsType } from '../types/common.types';

const PageWrapper: FC<ChildrenPropsType> = ({ children }) => {
    return (
        <Box
            bgcolor={(theme) => theme.custom.background}
            color={'text.primary'}
            display="flex"
            flexDirection="column"
        >
            <Header />
            <Container maxWidth="xl">
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{ pt: 10, minHeight: '100vh' }}
                >
                    <SideBarLeft />
                    {children}
                    <SideBarRight />
                </Stack>
            </Container>
        </Box>
    );
};

export default PageWrapper;
