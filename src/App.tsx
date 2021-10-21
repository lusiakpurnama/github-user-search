import { Switch, Route } from 'react-router-dom'

import { Home } from '~/routes/Home'
import { User } from '~/routes/User'
import { Repo } from '~/routes/Repo'
import { Page404 } from '~/routes/Page404'

import { Header } from '~/components/Header'

export const App = () => {
	return (
		<div>
			<Header />

			<Switch>
				<Route path="/user/:username/:repo/:path*">
					<Repo />
				</Route>
				<Route path="/user/:username">
					<User />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
				<Route>
					<Page404 />
				</Route>
			</Switch>
		</div>
	)
}
