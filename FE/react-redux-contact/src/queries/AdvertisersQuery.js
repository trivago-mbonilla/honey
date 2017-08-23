import { gql } from 'react-apollo';

export const AdvertisersQuery = gql`query{
    advertisers(advertiser_type:1){
      id
      partner_id
      advertiser_type
      status
      account_manager {
        type
        user {
          username
        }
      }
      tEs_booking {
        status
      }
      total_active_inventory
      total_inventory
      avg_content_score
      tAs_publisher
      tAs_advertiser
      tI_automated_bidding
      tI_bidding_markets {
        updated_by
        country {
          name
          id
        }
      }
      multiroom
    }
  }`;
