export interface TestValue {
  name: string;
  title: string;
  description: string;
}

export class TestValueImpl implements TestValue {
  description: string;
  name: string;
  title: string;
}
