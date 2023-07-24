import { FC } from 'react';
import FlexCenterWrapper from '../components/FlexCenterWrapper';
import { SearchResult } from '../features/search';

const SearchPage: FC = () => {
    return (
        <FlexCenterWrapper align="flex-start">
            <SearchResult />
        </FlexCenterWrapper>
    );
};

export default SearchPage;
