# Use the official .NET SDK image for building the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the project file and restore dependencies
COPY *.csproj ./
RUN dotnet restore

# Copy the rest of the app and build it
COPY . ./
RUN dotnet publish -c Development -o /app/publish

# Use the official .NET runtime image for running the app
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base

# Set the working directory
WORKDIR /app

# Expose port 5284
EXPOSE 5284

# Copy the build output from the previous stage
COPY --from=build /app/publish .

# Set the environment to Development
ENV ASPNETCORE_ENVIRONMENT Development

# Set the entry point to run the application
ENTRYPOINT ["dotnet", "server.dll"]
