import { FC, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container, Stack, Box } from '@mui/material';
import Header from './Header';
import SideBarWrapper from './SideBarWrapper';
import SideBarMenu from './SideBarMenu';
import { ChildrenPropsType } from '../types/props.types';
import { TagsCloud } from '../features/tags';

const PageWrapper: FC<ChildrenPropsType> = ({ children }) => {
    const [sideBarIsOpen, setSideBarState] = useState<boolean>(false);

    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const toggleSideBar = (): void => setSideBarState((cur) => !cur);

    return (
        <Box
            bgcolor={(theme) => theme.custom.background}
            color={'text.primary'}
            display="flex"
            flexDirection="column"
        >
            <Header toggleSideBar={toggleSideBar} />
            <Container maxWidth="xl">
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{ pt: 10, minHeight: '100vh' }}
                >
                    <SideBarWrapper
                        permanent={!isMobile}
                        open={isMobile ? sideBarIsOpen : true}
                        anchor={isMobile ? 'right' : 'left'}
                        handleClose={toggleSideBar}
                    >
                        <SideBarMenu />
                    </SideBarWrapper>
                    {children}
                    {!isMobile && (
                        <SideBarWrapper
                            anchor="right"
                            open={true}
                            permanent={true}
                        >
                            <Box sx={{ p: 2 }}>
                                <TagsCloud />
                            </Box>
                        </SideBarWrapper>
                    )}
                </Stack>
            </Container>
        </Box>
    );
};

export default PageWrapper;
