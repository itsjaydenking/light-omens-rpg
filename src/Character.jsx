function Character() {
  return (
    <div>
      <h1>Building Your Legend</h1>
      <p>
        Welcome to Character creation in <strong>Light Omens</strong>. Here,
        every choice shapes not only your character's journey but also the
        legacy they leave behind.
      </p>
      <h2>Understanding a Character</h2>
      <p style={{ color: "red" }}>Text would go here</p>
      <h3>Attributes</h3>
      <p>
        A character’s attributes stand for their core abilities. They express
        how capable a character is when trying specific actions.{" "}
        <strong>Each attribute has a rating from 1 to 6</strong>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Attribute Rating</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Weak Attribute</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Decent Attribute</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Strong Attribute</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Exceptional Attribute</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Outstanding Attribute</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Legendary Attribute</td>
          </tr>
        </tbody>
      </table>
      <h4>Body</h4>
      <p>
        The Body attribute encapsulates a character's physical prowess,
        encompassing strength, agility, and endurance. It is a gauge of their
        physical strength, dexterity, and stamina. Example actions include
        lifting weights, balancing on a beam, or swimming long distances.
      </p>
      <h4>Mind</h4>
      <p>
        The Mind attribute embodies a character's mental faculties, encompassing
        intelligence, wisdom, and concentration. It is a measure of their
        cognitive abilities, problem-solving skills, and mental strength.
        Example actions include solving puzzles, perceiving traps, or quick
        thinking.
      </p>
      <h4>Soul</h4>
      <p>
        The Soul attribute reveals a character's ability to be honest,
        convincing, and resolute. It shows their ability to navigate social
        interactions and challenges. Examples of actions include intimidating
        creatures, deceiving guards, or staying calm in danger.
      </p>
      <h3>Approaches</h3>
      <p>
        A character’s approaches stand for a character’s training and
        understanding. They express how effective a character is in a specific
        action. <strong>Each approach has a rating from 0 to 4.</strong>
      </p>
      <table>
        <thead>
          <tr>
            <th>Approach Rating</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>Untrained Approach</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Competent Approach</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Skillful Approach</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Expert Approach</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Masterful Approach</td>
          </tr>
        </tbody>
      </table>
      <h4>Force</h4>
      <p>
        Force approaches are direct. They emphasize taking advantage of obvious
        opportunities and simple solutions.
      </p>
      <h4>Finesse</h4>
      <p>
        Finesse approaches are indirect. They emphasize detailed plans and
        skillful tactics.
      </p>
      <h4>Focus</h4>
      <p>
        Focus approaches are passive and constant. They emphasize the ability to
        withstand struggles and keep a strong spirit.
      </p>
      <h3>Specialities</h3>
      <p>
        Specialties stand for a character’s general behavior. They express how
        particular a character is in a specific action. Each specialty is a
        specific combination of an attribute and an approach.{" "}
        <strong>Each specialty has a ranking from 0 to 6</strong>.
        <br />
        Ranks in a specialty allow you to upgrade your base dice pool. You
        replace a number of d6 in your dice pool equal to your specialty rank up
        to your attribute rating.
        <br />
        You can never upgrade more dice than your attribute and cannot upgrade
        any dice if you are <em>hopeless</em>.
      </p>
      <table>
        <thead>
          <tr>
            <th>+</th>
            <th>Body</th>
            <th>Mind</th>
            <th>Soul</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Force</td>
            <td>Brutal (Strength)</td>
            <td>Rational (Intelligence)</td>
            <td>Candid (Charm)</td>
          </tr>
          <tr>
            <td>Finesse</td>
            <td>Nimble (Dexterity)</td>
            <td>Insightful (Wisdom)</td>
            <td>Tactful (Influence)</td>
          </tr>
          <tr>
            <td>Focus</td>
            <td>Steady (Endurance)</td>
            <td>Deliberate (Attention)</td>
            <td>Poised (Resolve)</td>
          </tr>
        </tbody>
      </table>
      <h4>Body (Approach) Specialties</h4>
      <p>
        Body (Approach) specialties involve performing physical actions in a
        specific way. The following specialties relate to physical actions:
      </p>
      <ul>
        <li>
          Body (Force) describes a{" "}
          <strong>
            <em>Brutal</em>
          </strong>{" "}
          specialty. Behaving brutally applies when using strength.
        </li>
        <li>
          Body (Finesse) describes a{" "}
          <strong>
            <em>Nimble</em>
          </strong>{" "}
          specialty. Behaving nimbly applies when using dexterity.
        </li>
        <li>
          Body (Focus) describes a{" "}
          <strong>
            <em>Steady</em>
          </strong>{" "}
          specialty. Behaving steadily applies when using endurance.
        </li>
      </ul>
      <h4>Mind (Approach) Specialties</h4>
      <p>
        Mind (Approach) specialties involve performing mental actions in a
        specific way. The following specialties relate to mental actions:
      </p>
      <ul>
        <li>
          Mind (Force) describes a{" "}
          <strong>
            <em>Rational</em>
          </strong>{" "}
          specialty. Behaving rationally applies when using intelligence.
        </li>
        <li>
          Mind (Finesse) describes a{" "}
          <strong>
            <em>Insightful</em>
          </strong>{" "}
          specialty. Behaving insightfully applies when using wisdom.
        </li>
        <li>
          Mind (Focus) describes a{" "}
          <strong>
            <em>Deliberate</em>
          </strong>{" "}
          specialty. Behaving deliberately applies when using attention.
        </li>
      </ul>
      <h4>Soul (Approach) Specialties</h4>
      <p>
        Soul (Approach) specialties involve performing social actions in a
        specific way. The following specialties relate to social actions:
      </p>
      <ul>
        <li>
          Soul (Force) describes a{" "}
          <strong>
            <em>Candid</em>
          </strong>{" "}
          specialty. Behaving candidly applies when using charm.
        </li>
        <li>
          Soul (Finesse) describes a{" "}
          <strong>
            <em>Tactful</em>
          </strong>{" "}
          specialty. Behaving tactfully applies when using influence.
        </li>
        <li>
          Soul (Focus) describes a{" "}
          <strong>
            <em>Poised</em>
          </strong>{" "}
          specialty. Behaving poisedly applies when using resolve.
        </li>
      </ul>
      <h3>Hope</h3>
      <p>
        Hope represents a character's drive and resilience. It is the power that
        enables them to push beyond limits, shape the world, and overcome
        adversity.
        <br />
        It fuels extraordinary feats and powers abilities that require
        exceptional effort. A character's Hope pool, determined during creation,
        measures their will to act and endure.
      </p>
      <h4>Spending Hope</h4>
      <p>
        Each player character has their own Hope pool set up during character
        creation. There are a few ways a character may spend their Hope.
      </p>
      <ul>
        <li>
          Upgrade Dice: Spend 1 Hope to upgrade a single d6. Can only a number
          of times equal to the Approach.
        </li>
        <li>
          Reroll Dice: Spend 1 Hope to reroll up to two dice in your pool.
        </li>
        <li>
          Avoid Injury: Spend Hope to negate a consequence or impending injury
          (cost varies by injury severity).
        </li>
        <li>
          Activate Talents: Some talents require Hope to unleash special
          effects.
        </li>
      </ul>
      <h4>Hopelessness</h4>
      <p>
        A character becomes Hopeless when their Hope pool drops to 0, gaining a
        temporary Truth that reflects their struggle. Hopelessness locks one of
        the character’s Approaches, impeding their ability to act effectively
        and introducing additional challenges:
      </p>
      <ul>
        <li>
          Weakened (Force locked): Physical strength and intimidation falter;
          direct actions become exhausting.
        </li>
        <li>
          Clumsy (Finesse locked): Precision and agility suffer, requiring
          reliance on brute force or endurance.
        </li>
        <li>
          Distracted (Focus locked): Concentration wanes, resilience diminishes,
          and composure erodes.
        </li>
      </ul>
      <p>
        Hopeless characters cannot upgrade dice from their locked Approach and
        incur a Complication when using alternate Approaches. They also cannot
        regain Hope through Momentum or Chaos until their Hopelessness is
        resolved.
      </p>
      <h5>Handling Hopelessness</h5>
      <p>Hopelessness ends after a Rest or through aid from an ally:</p>
      <ul>
        <li>
          Ally Support: A Plan and Prepare action can target the Hopeless Truth
          (Difficulty 2 Test). Success removes Hopelessness, restoring 1 Hope to
          all involved characters.
        </li>
        <li>
          Learning from Adversity: Characters who experience or help resolve
          Hopelessness earn experience, reflecting growth through struggle.
        </li>
      </ul>
      <h3>Technique Level</h3>
      <p>
        Technique Level (TL) measures a character’s proficiency in handling
        physical objects, magical elements, and technical constructs. A
        character can interact with any object whose Complexity is equal to or
        below their TL, though difficult or hazardous situations may still
        require a Test.
      </p>
      <table>
        <thead>
          <tr>
            <th>Complexity</th>
            <th>Description</th>
            <th>Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>Simple</td>
            <td>
              Survival skills, simple weapon handling, basic first aid, and
              common knowledge.
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Novice</td>
            <td>
              Basic combat skills, simple spells, and beginner technological
              use.
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Apprentice</td>
            <td>
              Advanced survival tactics, strategic maneuvers, and more intricate
              technologies.
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Adept</td>
            <td>
              Expert survival techniques, magical specializations, and advanced
              technical knowledge.
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Expert</td>
            <td>
              Seamless integration of magic and technology, advanced combat
              tactics, and complex devices.
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Masterful</td>
            <td>
              Unrivaled combat, sophisticated magical manipulation, and
              unconventional technologies.
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Ascendant</td>
            <td>
              Mastery over all disciplines, transcending limitations of
              survival, combat, and magic.
            </td>
          </tr>
        </tbody>
      </table>
      <h4>Challenges with Higher Complexity</h4>
      <p>
        When using an object with a Complexity above their TL, a character faces
        increased difficulty:
      </p>
      <ul>
        <li>
          Test Difficulty: Increases by +2 per level of difference between the
          TL and the object’s Complexity.
        </li>
        <li>
          Collaborative Efforts: A higher-TL character may assist, reducing the
          penalty to +1 per level of difference.
        </li>
        <li>
          Chaos Generation: Using an object beyond one’s TL generates Chaos
          equal to the level difference.
        </li>
      </ul>
      <h4>Mentorship and Training</h4>
      <p>
        During a Long Rest, a character with sufficient TL can train another to
        use a specific object:
      </p>
      <ul>
        <li>The mentor must have a TL high enough to use the object.</li>
        <li>
          The trainee gains the Mentored Truth, allowing them to treat the
          object’s Complexity as one level lower.
        </li>
        <li>
          A character may only hold the Mentored Truth for one object at a time.
        </li>
      </ul>
      <h3>Supply Points</h3>
      <p>
        Supply Points represent salvaged components, harvested materials, or
        residual arcane energy that characters can use to craft tools, items, or
        effects. Each player character has a pool of Supply Points to reflect
        these Supplies.
      </p>
      <h4>Using Supply Points</h4>
      <p>Characters can use Supply Points to create or conjure items:</p>
      <ul>
        <li>
          Declaring Supplies: Players describe the object they reveal, craft, or
          conjure, whether or not the action requires a Test.
        </li>
        <li>
          GM Approval: The GM assigns a Supply Point cost based on the
          complexity of the creation.
        </li>
        <li>
          Equipment Truth: If the cost is paid, the item becomes a temporary
          equipment Truth for the scene.
        </li>
      </ul>
      <p>Limits and Restrictions:</p>
      <ul>
        <li>
          Players cannot spend more Supply Points on a single creation than
          their Technique Level.
        </li>
        <li>
          The item’s Complexity is equal to one less than its Supply Point cost.
        </li>
        <li>
          Items created using Supply Points break down at the end of the scene.
        </li>
      </ul>
      <h4>Gathering Supply Points</h4>
      <p>Characters can gather Supplies once per scene:</p>
      <ul>
        <li>
          Choosing a Source: Players decide whether they are gathering from
          natural, magical, or industrial environments.
        </li>
        <li>
          Attribute Test: Make an Attribute Test using Force or Finesse with a
          Difficulty of 1. On success:
        </li>
        <ul>
          <li>
            Gain Supply Points equal to the number of dice rolled, plus one for
            each d12 rolled.
          </li>
          <li>Spend 1 Momentum to gain an additional +1 Supply Point.</li>
        </ul>
      </ul>
      <p>Supply Availability:</p>
      <ul>
        <li>Scarce Areas: Supply gains are halved (rounded up).</li>
        <li>Plentiful Areas: Supply gains are doubled.</li>
        <li>
          Carrying Capacity: A character’s maximum Supply Points equals their
          baseline. Exceeding this creates the Encumbered Truth, limiting
          movement and agility. Going beyond double the baseline results in the
          Overburdened Truth, severely restricting actions until Supplies are
          used or discarded.
        </li>
      </ul>
      <h3>Bonds</h3>
      <p>
        Bonds represent the connections between player characters, forming a
        Truth that strengthens their relationships and gameplay dynamics. Bonds
        are either Friendships or Rivalries, created during character creation
        to establish group cohesion and narrative depth. Bonds also play a role
        in recovering Hope and influencing group interactions.
      </p>
      <h4>Friendships</h4>
      <p>
        A friendly bond fosters mutual support and encouragement: <br /> When a
        character spends Momentum to Gain Favor or shares Hope during a rest,
        their bonded ally regains +1 extra Hope.
      </p>
      <h4>Rivalries</h4>
      <p>
        A rivalry bond inspires competition and self-improvement: <br />
        When a character regains Hope by generating Chaos to Tempt Fate or
        spending Momentum to Gain Favor, their rival regains +1 Hope.
      </p>

      <h3>Putting it All Together</h3>
      <p>
        When a player creates a character for Light Omens RPG, follow the
        following steps.
      </p>
      <ul>
        <li>
          Select a single Origin for the character. The origin describes where
          the character came from. This is a cultural aspect more than anything.
        </li>
        <li>
          Select an Archetype for the character. The archetype describes what
          the character does. This is about their career and primary skill set.
        </li>
        <li>
          Select a Tendency for the character. The tendency describes the
          character’s default behavior.
        </li>
      </ul>
      <p>
        These three elements describe a character; you are a(n) tendency +
        origin + archetype.
      </p>
    </div>
  );
}

export default Character;
