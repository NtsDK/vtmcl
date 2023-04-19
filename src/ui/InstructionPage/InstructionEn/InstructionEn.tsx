import React from "react";

import { ExternalLink } from "../../../uiLib/ExternalLink";
import { UnorderedList } from "../../../uiLib/UnorderedList";

interface InstructionEnProps {}

export function InstructionEn(props: InstructionEnProps): JSX.Element {
  return (
    <div className="InstructionEn">
      <div className="tw-mb-8">
        <h1 className="tw-text-lg tw-mb-4">Character sheet demo</h1>

        <iframe
          className="tw-mx-auto"
          width="640"
          height="360"
          src="https://www.youtube.com/embed/jRclWn96MR0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="tw-mb-8">
        <h2 className="tw-text-lg tw-mb-4">What is this page about?</h2>
        <p>
          Web page 'Character sheet WoD v20 by NtsDK' is an electronic character
          sheet for tabletop role-playing games in the World of Darkness
          universe 20th Anniversary Edition.
        </p>
        <p>
          World of Darkness is a modern world with The World of Darkness
          universe is a version of the modern world in which mythical creatures
          operate: vampires, werewolves, magicians, changelings and others. Each
          species of creatures has its own vision of the history of the world,
          the structure of society and its own conflict of existence.
        </p>
        <p>
          Current version implements single page character sheets for Vampires
          and Changelings.
        </p>
        <p>
          More information in the Internet
          <UnorderedList>
            <li>
              <ExternalLink href="https://en.wikipedia.org/wiki/World_of_Darkness">
                World of Darkness
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://en.wikipedia.org/wiki/Vampire:_The_Masquerade">
                Vampire: The Masquerade
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://en.wikipedia.org/wiki/Changeling:_The_Dreaming">
                Changeling: The Dreaming
              </ExternalLink>
            </li>
          </UnorderedList>
        </p>
      </div>
      <div>
        <h2 className="tw-text-lg tw-mb-4">Character sheet features</h2>
        <UnorderedList>
          <li>
            In my program you can create and change World of Darkness
            characters. You can download character info to your hard drive and
            upload it later or open character sheet on other device. Also you
            can store information about several characters in different
            chronicles.
          </li>
          <li>
            My character sheet is aesthetic and functional. It provides more
            possibilities than official interactive PDF charsheets. Option lists
            and check list simplify character creation.
          </li>
          <li>You can customize the appearance of the character sheet.</li>
          <li>
            You can print the character sheet in a PDF file or on a printer.
          </li>
          <li>
            Charsheet supports English and Russian language. All possible
            content will be translated on language switch.
          </li>
          <li>The character sheet is adapted for use with screen readers.</li>
        </UnorderedList>
      </div>
    </div>
  );
}
