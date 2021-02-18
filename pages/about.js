import React from 'react';
import Image from 'next/image';
import NavBar from '../components/NavBar/NavBar';
export default function About() {
  return (
    <div>
      <NavBar />
      <div className="my-8">
        <h1 className="text-yellow-200 my-3 text-3xl">Jova's Mission</h1>
        <p>
          is to provide public with the latest infromation about current house
          and senate representatives in the United States. Jova is an innovative
          and unique approach to researching and learning about ..... Jova will
          allow people to make conscious decisions about who they vote and why.
          (etc)
        </p>
      </div>
      <div className="grid justify-items-center ...">
        <h1 className="my-4 text-5xl"> Meet the team:</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Image src="/Jenesh.jpeg" alt="Jenesh" width="200" height="200" />
            <h4 className="text-md text-indigo-500 font-semibold">
              Jenesh Napit
            </h4>
            <h3 className="text-sm text-white-500 font-semibold">
              Software Engineer at Codeacademy
            </h3>
            <a
              href="https://www.linkedin.com/in/jeneshnapit/"
              className="block mt-1 text-xs leading-tight font-medium text-yellow hover:underline">
              Linkedin
            </a>
          </div>
          <div>
            <Image src="/Owen.jpeg" alt="Jenesh" width="200" height="200" />
            <h4 className="text-md text-indigo-500 font-semibold">
              Owen Jones
            </h4>
            <h3 className="text-sm text-white-500 font-semibold">
              Full Stack Web Developer Fellow at Pursuit
            </h3>
            <a
              href="https://www.linkedin.com/in/owen-jones-92a848a6/"
              className="block mt-1 text-xs leading-tight font-medium text-yellow hover:underline">
              Linkedin
            </a>
          </div>
          <div>
            <Image src="/Voniel.jpeg" alt="Jenesh" width="200" height="200" />
            <h4 className="text-md text-indigo-500 font-semibold">
              Voniel Brown
            </h4>
            <h3 className="text-sm text-white-500 font-semibold">
              Software Engineer at Codeacademy
            </h3>
            <a
              href=" https://www.linkedin.com/in/vonielbrown/"
              className="block mt-1 text-xs leading-tight font-medium text-yellow hover:underline">
              Linkedin
            </a>
          </div>
          <div>
            <Image src="/Aransa.jpeg" alt="Jenesh" width="200" height="200" />
            <h4 className="text-sm text-indigo-500 font-semibold">
              Aransa Garcia
            </h4>
            <h3> Full Stack Web Developer Fellow at Pursuit</h3>
            <a
              href="https://www.linkedin.com/in/aransa-garcia/"
              className="block mt-1 text-xs leading-tight font-medium text-yellow hover:underline">
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
