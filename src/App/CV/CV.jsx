import React from 'react';
import './styles.css';
import linkedin from './techstack/linkedin.png';
import discord from './techstack/discord.png';
import github from './techstack/github.svg';
import html from './techstack/html.svg';
import jira from './techstack/jira.png';
import js from './techstack/js.svg';
import react from './techstack/react.svg';
import redmine from './techstack/redmine.png';
import redux from './techstack/redux.png';
import ts from './techstack/ts.svg';
import vscode from './techstack/vscode.png';
import css from './techstack/css.svg';
import git from './techstack/git.png';
import firebase from './techstack/firebase.png';

export const CV = () => {
  return (
    <div>
      <div className="img-tech-stack">
        <b>My LinkedIn:</b>
        <div className="tech-container">
          <br></br>
          <a
            href="https://www.linkedin.com/in/amadeusz-szewczyk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" className="tech-img" />
          </a>
          <div className="tech-text">LinkedIn</div>
        </div>
      </div>
      <br></br>
      <br></br>
      <b>My tech-stack:</b>
      <br></br>
      <br></br>
      <div className="img-tech-stack">
        <div className="row">
          <div className="tech-container">
            <img src={html} alt="HTML" className="tech-img" />
            <div className="tech-text">HTML</div>
          </div>
          <div className="tech-container">
            <img src={css} alt="CSS" className="tech-img" />
            <div className="tech-text">CSS</div>
          </div>
          <div className="tech-container">
            <img src={js} alt="JavaScript" className="tech-img" />
            <div className="tech-text">JavaScript</div>
          </div>
          <div className="tech-container">
            <img src={ts} alt="TypeScript" className="tech-img" />
            <div className="tech-text">TypeScript</div>
          </div>
          <div className="tech-container">
            <img src={react} alt="React" className="tech-img" />
            <div className="tech-text">React</div>
          </div>
          <div className="tech-container">
            <img src={redux} alt="Redux" className="tech-img" />
            <div className="tech-text">Redux</div>
          </div>
        </div>
        <div className="row">
          <div className="tech-container">
            <img src={firebase} alt="Firebase" className="tech-img" />
            <div className="tech-text">Firebase</div>
          </div>
          <div className="tech-container">
            <img src={git} alt="Git" className="tech-img" />
            <div className="tech-text">Git</div>
          </div>
          <div className="tech-container">
            <img src={github} alt="GitHub" className="tech-img" />
            <div className="tech-text">GitHub</div>
          </div>
          <div className="tech-container">
            <img src={vscode} alt="VSCode" className="tech-img" />
            <div className="tech-text">VSCode</div>
          </div>
          <div className="tech-container">
            <img src={discord} alt="Discord" className="tech-img" />
            <div className="tech-text">Discord</div>
          </div>
          <div className="tech-container">
            <img src={redmine} alt="Redmine" className="tech-img" />
            <div className="tech-text">Redmine</div>
          </div>
        </div>
      </div>
    </div>
  );
};
