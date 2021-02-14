const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
    
}

function setup(){
   createCanvas(500, 800)
   drops = new Drops(random(0, 500), random(0, 400))
    
}

function draw(){
    drops.display()
}   

