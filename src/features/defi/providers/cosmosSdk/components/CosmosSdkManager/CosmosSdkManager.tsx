import { GetStarted } from 'features/defi/components/GetStarted/GetStarted'
import { LearnMore } from 'features/defi/components/LearnMore/LearnMore'
import {
  DefiAction,
  DefiParams
} from 'features/defi/contexts/DefiManagerProvider/DefiManagerProvider'
import { useParams } from 'react-router'
import { MemoryRouter, Route, RouteComponentProps, Switch } from 'react-router-dom'

type CosmosSdkManagerProps = {
  assetId?: string
}

export enum CosmosRoutes {
  GetStarted = '/defi/vault/cosmos/get-started',
  LearnMore = '/defi/vault/cosmos/learn-more'
}

export const entries = [CosmosRoutes.GetStarted, CosmosRoutes.LearnMore]

// TODO: Add proper routing with MemoryRouter, this just handles the "Get Started" modal route for now
// TODO: Do not use monkey default assetId
export const CosmosSdkManager = ({ assetId = 'cosmoshub-3/slip44:118' }: CosmosSdkManagerProps) => {
  return (
    <MemoryRouter initialEntries={entries}>
      <Switch>
        <Route
          path='/defi/:earnType/:provider/:action'
          component={({ match: { params } }: RouteComponentProps) => {
            if (params.action === DefiAction.GetStarted) {
              return <GetStarted assetId={assetId} />
            }
            if (params.action === DefiAction.LearnMore) {
              return <LearnMore />
            }
            k
            return null
          }}
        />
      </Switch>
    </MemoryRouter>
  )
}
