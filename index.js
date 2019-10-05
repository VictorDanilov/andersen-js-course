import './styles/main.css';
import { DrawingModel, ToolModel } from './model';
import { DrawingBagView, ToolBagView } from './view';
import { DrawingController, ToolsController } from './controller';

const drawingModel = new DrawingModel();
const toolModel = new ToolModel();
const drawingBagView = new DrawingBagView();
const toolBagView = new ToolBagView();
const drawingController = new DrawingController(drawingModel, drawingBagView);
const toolController = new ToolsController(toolModel, toolBagView);
