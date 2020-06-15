using System;
using System.Threading.Tasks;
using Example;

public class Startup
{
  public async Task<object> Invoke(dynamic input)
  {
    string message = (string)input.message;
    double aNumber = (double)input.aNumber;
    double bNumber = (double)input.bNumber;

    InvokeResponse response = new InvokeResponse(ExampleClass.Hello(message), ExampleClass.Sum(aNumber, bNumber));

    return response;
  }
}

public class InvokeResponse
{
  public string message;
  public double value;

  public InvokeResponse(string message, double value)
  {
    this.message = message;
    this.value = value;
  }
}