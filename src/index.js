import Model from './model';
import View from './view';
import Controller from './constroller';
import { load } from './helps';
import './styles/style.css';

const state = load();

const model = new Model(state);
const view = new View();
const controller = new Controller(model, view);
