# Realtime price server

## The project

This project, a server that emits realtime prices for mushrooms on a given time interval, is released as a project assignment and a part of a University course [DV1612 JavaScript-baserade webbramverk](https://jsramverk.se/) at BTH(Blekinge Institute of Technology) 2020-21.

## Installations/dependencies

    - socket.io
    - @types/socket.io
    - express

## Production server

Run `npm start` for a prod realtime price server. Server starts up at `https://socket-server-project.ktibe.me`.

## GitHub

The course repository for the realtime price server is available at [My Github repo Realtime price server](https://github.com/kati18/jsramverk-socket-server-project.git)<br>

## Implementation

Jag har implementerat realtidsaspekten med hjälp av socket.io ungefär på samma sätt som jag gjorde i kmom05. Simulerade realtidsvärden genereras med jämnt intervall och emittas ut från servern till uppkopplade klienter/connected websockets. Realtidsvärdena beräknas med hjälp av attribut och slumpen(Wienerprocessen). Tekniken fungerar som tänkt enligt min implementation.  
