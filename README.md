# Testing

This package provides a simple way to automate your test scripts.

## How to use

First you need to create your test case, all test cases must extends the library test case, see below

```ts
import * as Class from '@singleware/class';
import * as Testing from '@singleware/testing';

@Class.Describe()
export class MyTestCase extends Testing.Case {
  @Class.Public()
  @Testing.Method()
  public testMethod(): void {
    // Assertions here...
  }
}
```

After you need to create the suite runner, the suite runner script can be similar the code below

```ts
import * as Testing from '@singleware/testing';

import { MyTestCase } from './mytestcase.spec';

const suite = new Testing.Suite();

suite.addCase(MyTestCase);

suite.perform().then((report: Testing.Report.Suite) => {
  const logger = new Testing.Loggers.Tap();
  logger.print(report);
  process.exitCode = report.errors > 0 ? 1 : 0;
});
```

> For browser compatibility, remove the line `process.exitCode`

Now you are ready to add assertions in your test case, you can add as many assertions as you want, after that you just need to build and run the suite script like any JavaScript file.

## Assertions

The package provides a collection of assertion methods to help you to test expected values and put its results in the report object. Any assertion method can be accessed by the test case instance using the keyword `this`.

| Name                 | Description                                                                      |
| -------------------- | -------------------------------------------------------------------------------- |
| isTrue               | Determines whether the specified condition is true.                              |
| isFalse              | Determines whether the specified condition is false.                             |
| isNaN                | Determines whether the specified value is NaN.                                   |
| isNull               | Determines whether the specified value is null.                                  |
| isInfinite           | Determines whether the specified value is infinite.                              |
| isUndefined          | Determines whether the specified value is undefined.                             |
| isEmpty              | Determines whether the specified value is empty.                                 |
| isBoolean            | Determines whether the specified value is a boolean type.                        |
| isString             | Determines whether the specified value is a string type.                         |
| isNumber             | Determines whether the specified value is a number type.                         |
| isArray              | Determines whether the specified value is an array type.                         |
| isInstanceOf         | Determines whether the specified value is an instance of the expected type.      |
| isGreaterThan        | Determines whether the actual is greater than the expected value.                |
| isGreaterThanOrEqual | Determines whether the actual value is greater than or equal the expected value. |
| isLessThan           | Determines whether the actual value is less than the expected value.             |
| isLessThanOrEqual    | Determines whether the actual value is less than or equal the expected value.    |
| areEquals            | Determines whether the specified values are equals.                              |
| areNotEquals         | Determines whether the specified values are not equals.                          |
| areSame              | Determines whether the specified values and types are the same.                  |
| areNotSame           | Determines whether the specified values and types are not the same.              |
| hasIndex             | Determines whether the specified array has the expected index.                   |
| hasProperty          | Determines whether the specified object has the expected property.               |
| hasMethod            | Determines whether the specified object has the expected method.                 |
| hasValue             | Determines whether the specified array contains the given value.                 |
| hasOnly              | Determines whether the specified array contains only the expected value.         |
| hasException         | Determines whether the specified callback throws an expected exception.          |

## Report

After performing all test cases, the library will generates a report object that can be converted to multiple output formats, you can check the `Loggers` namespace to see which output formats are available for your current version.

## Install

Using npm:

```sh
npm i @singleware/testing
```

## License

[MIT &copy; Silas B. Domingos](https://balmante.eti.br)
