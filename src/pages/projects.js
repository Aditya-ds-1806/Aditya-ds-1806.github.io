/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { ProjectsPageTemplate } from '../containers/Projects';

export default function ProjectsPage() {
  return (
    <ProjectsPageTemplate
      title="Projects"
      intro={
        <>
          Open source is a real passion and a way of thinking. I've made many
          <strong> Dashboards</strong> and <strong>Web Apps</strong> with strong
          architecture, great UX and bleeding edge tech for clients and
          companies worldwide
        </>
      }
      projects={{
        Skribblrs: {
          label: 'Multiplayer online game',
          description: (
            <>
              Skribblrs.io is a clone of the classic online multiplayer drawing
              and guessing game <a href="https://skribbl.io">Skribbl.io</a>.
            </>
          ),
        },
        Pgn_Parser: {
          label: 'An NPM Package',
          description: (
            <>
              Chess-PGN-Parser is a file parser that parses <code>.pgn</code>{' '}
              files to extract chess moves and converts it into{' '}
              <code>JSON</code>. This can be used to load games into an online
              chess board from just the <code>.pgn</code> file.
            </>
          ),
        },
        CICT: {
          label: 'Conference Website',
          description: (
            <>
              This is a website I built for a conference that was hosted online
              by my college, IIITDM Kancheepuram, in December 2020.
            </>
          ),
        },
        Madeit: {
          label: 'Portfolio website + CMS',
          description: (
            <>
              This is a Portfolio website and a custom CMS solution for MaDeIT
              Innovation Foundation, a startup incubator.
            </>
          ),
        },
        Samgatha: {
          label: 'Cultural Fest',
          description: (
            <>
              This was the website for Samgatha during the 2020 edition, IIITDM
              Kancheepuram's cultural fest.
            </>
          ),
        },
        Raga: {
          label: 'Raga Classifier',
          description: (
            <>
              Made use of the Fisher-Jenks Natural Breaks Optimization algorithm
              and Euclidean distance to classify <em>Melakarta ragas</em> in
              Carnatic Music.
            </>
          ),
        },
        Dafi: {
          label: 'Music Identifier',
          description: (
            <>
              Implementation of Shazam's Digital Audio Fingerprinting Algorithm
              in Python to identify music.
            </>
          ),
        },
        Pingg: {
          label: 'WhatsApp Clone',
          description: (
            <>
              Pingg is a clone of WhatsApp that uses Firebase Real Time Database
              to store chats and implements WhatsApp's single/double grey-tick
              and blue-tick feature.
            </>
          ),
        },
        Prsc: {
          label: 'E-Prescription Management System',
          description: (
            <>
              A simple web application with the ability to identify fake
              prescriptions using Fourier Transform to help prevent prescription
              drug abuse.
            </>
          ),
        },
        Blog: {
          label: 'College Blog',
          description: (
            <>
              A Blogging platform for the college student community with an
              admin panel to monitor blogs.
            </>
          ),
        },
        Microservice: {
          label: 'Microservices',
          description: (
            <>
              Microservices project containing 3 services: User service, User
              interaction service and Content Service.
            </>
          ),
        },
        ocr: {
          label: 'Image to Text',
          description: (
            <>
              A Flask API for performing Pre-processing and OCR detection on
              uploaded images.
            </>
          ),
        },
      }}
    />
  );
}
