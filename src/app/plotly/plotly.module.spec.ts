import { PlotlyModule } from './plotly.module';

describe('PlotlyModule', () => {
  let plotlyModule: PlotlyModule;

  beforeEach(() => {
    plotlyModule = new PlotlyModule();
  });

  it('should create an instance', () => {
    expect(plotlyModule).toBeTruthy();
  });
});
