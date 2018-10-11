import ReactOnRails from 'react-on-rails';
import 'babel-polyfill'
import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import Map from '../bundles/Map/components/Map';
import Game from '../bundles/Game/components/Game';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  Map,
  Game
});
