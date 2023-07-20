import { FC, useState } from 'react';
import CustomFab from '../../../components/CustomFab';
import AddIcon from '@mui/icons-material/Add';
import DialogFormWrapper from '../../../components/DialogFormWrapper';
import { NewItemDialogPropsType } from '../types/common.types';
import NewItemFormControl from './NewItemFormControl';

export const NewItemDialog: FC<NewItemDialogPropsType> = ({ collectionId }) => {
    const [dialogIsOpen, setDialogState] = useState<boolean>(false);

    return (
        <>
            <CustomFab
                color="primary"
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    alignSelf: 'flex-start',
                    transform: 'scale(1.1)',
                }}
                size="large"
                icon={<AddIcon fontSize="large" />}
                handleClick={() => setDialogState(true)}
            />
            <DialogFormWrapper
                isOpen={dialogIsOpen}
                handleClose={() => setDialogState(false)}
            >
                <NewItemFormControl
                    onSubmit={() => setDialogState(false)}
                    collectionId={collectionId}
                />
            </DialogFormWrapper>
        </>
    );
};
