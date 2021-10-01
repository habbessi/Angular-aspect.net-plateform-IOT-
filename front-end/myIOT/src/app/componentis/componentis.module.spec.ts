import { ComponentisModule } from './componentis.module';

describe('ComponentisModule', () => {
  let componentisModule: ComponentisModule;

  beforeEach(() => {
    componentisModule = new ComponentisModule();
  });

  it('should create an instance', () => {
    expect(componentisModule).toBeTruthy();
  });
});
