import Matter from "matter-js";
import Bird from "../components/Bird";
import Floor from "../components/Floor";

import { Dimensions } from 'react-native';
import Obstacle from "../components/Obstacle";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


export default restart => {
    // We are calling this function to restart the application if such a need arises.
    // Maybe the game got over and the user wants to play the game again. For such cases this function is to be used.

    //  For this function, we are going to use the Physics Engine from Matter.js framework.
    //  Creating an instance of the Matter.js engine

    let engine = Matter.Engine.create({enableSleeping: false})

    // Create an instance of the world

    let world = engine.world

    engine.gravity.y = 0.4; // This gravity is applicable only along the y axis

    return {
        physics: {engine, world},
        // Along with the engine running the world and the world itself, we are going to return certain components
        // These components are essential to the world that we are building for the flappy bird to travel in.

        Bird: Bird(world, 'green', {x: 50, y: 200}, {height: 40, width: 40}),
        Obstacle1: Obstacle(world, 'Top Obstacle 1', 'red', {x: 50, y: 200}, {height: 40, width: 40}),
        Floor: Floor(world, 'green', {x: screenWidth / 2, y: screenHeight}, {height: 50, width: screenWidth})
    };
}

