import { FC, useState } from 'react';
import {
    DialogTitle,
    DialogContent,
    Stepper,
    Step,
    StepLabel,
    Box,
} from '@mui/material';
import NewCollectionForm from './NewCollectionForm';
import NewFieldsForm from './NewFieldsForm';
import { ICollection } from '../../../../types/slices.types';
import { CollectionFormSteps } from '../../configs/enums.config';
import { NewCollectionAndFieldsFormPropsType } from '../../types/common.types';
import { useTranslation } from 'react-i18next';
import { collectionAndFieldsFormConfig } from '../../configs/form.config';

const NewCollectionAndFieldsForm: FC<NewCollectionAndFieldsFormPropsType> = ({
    handleClose,
}) => {
    const { t } = useTranslation();

    const [newCollection, setNewCollection] = useState<ICollection | null>(
        null
    );

    const [currentStep, setCurrentStep] = useState<CollectionFormSteps>(
        CollectionFormSteps.collection
    );

    const goToNextStep = () => setCurrentStep((current) => current + 1);

    const saveNewCollection = (collection: ICollection) => {
        setNewCollection(collection);
        goToNextStep();
    };

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
            }}
        >
            <DialogTitle variant="h5" textAlign="center">
                {t(collectionAndFieldsFormConfig.title)}
            </DialogTitle>
            <DialogContent sx={{ p: { xs: 1, md: 2 } }}>
                <Stepper
                    activeStep={currentStep}
                    sx={{ px: { xs: 1, sm: 4 }, mb: 3 }}
                >
                    {collectionAndFieldsFormConfig.steps.map(
                        ({ key, label }) => (
                            <Step key={key}>
                                <StepLabel>{t(label)}</StepLabel>
                            </Step>
                        )
                    )}
                </Stepper>
                {currentStep === CollectionFormSteps.collection && (
                    <NewCollectionForm onSubmit={saveNewCollection} />
                )}
                {currentStep === CollectionFormSteps.fields && (
                    <NewFieldsForm
                        onSubmit={handleClose}
                        collectionId={newCollection?.id as number}
                    />
                )}
            </DialogContent>
        </Box>
    );
};

export default NewCollectionAndFieldsForm;
