# Realtime price server - socket-server-trade

## The project

This project, a server that emits realtime prices for mushrooms on a given time interval, is released as a project assignment and a part of a University course [DV1612 JavaScript-baserade webbramverk](https://jsramverk.se/) at BTH(Blekinge Institute of Technology) 2020-21.

## Installations/dependencies

    - socket.io
    - @types/socket.io
    - express

## Production server

Run `npm start` for a prod realtime price server. Server starts up at `https://socket-server-trade.ktibe.me`.

## GitHub

The course repository for the Realtime price server is available at [My Github repo Realtime price server](https://github.com/kati18/jsramverk-socket-server-project.git)<br>
A backend Trade API is available at [My Github repo Trade API](https://github.com/kati18/jsramverk-backend-project.git)<br>
A frontend SPA developed in Angular is available at [My GitHub repo Trade Angular](https://github.com/kati18/jsramverk-frontend-project.git)

## Implementation

Jag har implementerat realtidsaspekten med hjälp av socket.io på ungefär samma sätt som jag gjorde i kmom05. Den stora skillnaden är dock att nu genererar servern simulerade realtidsvärden och emittar ut dem till uppkopplade klienter/connected websockets med jämnt intervall. Realtidsvärdena beräknas med hjälp av attribut och slumpen(Wiener-processen) och tekniken fungerar som tänkt enligt min implementation. Initialt la jag en hel del tid på att försöka emitta ut historiska värden i väntan på att genereringen av realtidsvärdena kommer igång men tyvärr lyckades jag inte. Det är däremot något som jag kommer att titta vidare på och försöka lösa. Jag har också lagt ner en hel del tid på att justera attributen för beräkning av realtidsvärdena då jag upplevde att de skenade iväg efter ett tag. Jag lyckades slutligen någonlunda och bestämda mig för att det är "good enough" i alla fall för denna kursen vars huvudsyfte (om inte jag har missförstått det helt...) ju inte är generering av simulerade realtidsvärden.
