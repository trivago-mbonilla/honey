import React from 'react';
import { graphql } from 'react-apollo';
import {AdvertisersQuery} from '../queries/AdvertisersQuery';

const AdvertisersView = ({ data: {loading, error, advertisers }}) => {
    if (error) {
        return <p>{error.message}</p>;
    }
    if (!advertisers) { return null; }

    return <div>
        { advertisers.map(advertiser =>
            <p key={advertiser.id}>id: {advertiser.id}</p>
        ) }
    </div>
};

export default graphql(AdvertisersQuery)(AdvertisersView);
