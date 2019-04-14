A starter template composing the Asp.Net Core **WebApi** template and **Create-React-App** setup. This starter tries to provide a **minimal** setup for ASP.NET Core and React without **additional** opinions. That means: no TypeScript (trivial to enable with CRA though), no SSR, no Redux, no api-versioning etc.

# Install

In order to get started [node](https://nodejs.org/en/download/) and the [dotnet core sdk](https://dotnet.microsoft.com/download) need to be installed.

In a terminal run

```
dotnet new --install Jbuschke.AspCra::*
```

# Getting started

```
dotnet new asp-cra --name MyApp
cd MyApp/webapp
npm install
npm start
```

in a second terminal:

```
cd MyApp
dotnet run

```

Then open http://localhost:4000.
