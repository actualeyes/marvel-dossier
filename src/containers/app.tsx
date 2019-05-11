import App from '../components/app';
import * as React from 'react';
import { Store } from '../types/index';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export interface Props {

}

class AppContainer extends React.Component<Props> {
  render() {
    return (
      <App />
    );
  }
}

export const mapStateToProps = (state: Store) => {
  return state;
};

export const mapDispatchToProps = (
  dispatch: Dispatch<actions.AppAction>
) => {
  return {
    onSearchInput: (event: React.FormEvent<HTMLInputElement>) => {
      event.preventDefault();
      dispatch(actions.clearAllFilterConstraints());
      dispatch(actions.hideOverlay());
      dispatch(actions.updateAppContext(Context.Autocomplete));
      dispatch(actions.updateSearchQuery(event.currentTarget.value));
      dispatch(actions.requestAutocompleteData(event.currentTarget.value));
      dispatch(actions.trackGoogleAnalyticsEvent({
        category: 'trendalytics search',
        action: 'click',
        label: 'search input'
      }));
    },
    onClear: () => {
      const input =
        document.getElementById('trend-search-input') as HTMLInputElement;
      input.value = '';
      dispatch(actions.hideOverlay());
      dispatch(actions.clearAutocompleteData());
      dispatch(actions.clearAllFilterConstraints());
      dispatch(actions.updateAppContext(Context.Autocomplete));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
