<p class="notice">
	Are you a Masters player looking for team to play for? Or are you a Team Manger looking to add to your bench? Maybe you are a Tournament Director who wants want help your teams find players? Free Agent Masters are here to help you all!
</p>

Free Agent Masters is a free service from your friends at [Masters Basketball Tournaments](https://www.mastersbasketballtournaments.com/), the only worldwide directory of Masters basketball tournaments. This idea was born out of the struggles we had breaking into the Masters basketball circuit ourselves and hearing that many others seem to be experiencing the same obstacle.

The idea is simple. A central, worldwide, match-making/clearing house service that aims to help the Masters basketball community grow. If your are a player looking for a team or a Team Manager looking for players, we aim to put you together. An additional benefit for Tournament Directors is that you no longer have to be the intermediary between players and teams, therefore freeing you up for the enormous task of actually putting on the tournament for us players!

Give us some details and we'll make the connections for you.

So tell your Masters friends, Team Manager and that hard working Tournament Director about the potential of this service for our Masters basketball community!

The information you share here will be treated with respect and not sold or given to any other site, service or person without your consent.

<form action="/thank-you/" method="POST">
<p>
	<label for="givenname">Given name *</label>
	<input id="givenname" name="givenname" type="text" required>
</p>
<p>
	<label for="familyname">Family name *</label>
	<input id="familyname" name="familyname" type="text" required>
</p>
<p>
	<label for="email">Email address *</label>
	<input id="email" name="email" type="email" required>
</p>
<details name="role" >
	<summary>I am a <strong>PLAYER</strong> looking for a team to play for at a tournament</summary>
	<p>
		Select all the tournament competitions you are interested in:<br>
		(hold the ctrl/cmd key to select multiple competitions)
	</p>
<select id="tournament" name="tournament" size="10" multiple>
	{% for tournament in tournaments %}
		<optgroup label="{{ tournament.name }}, {{ tournament.location }} ({{ tournament.dates }})">
			{% for competition in tournament.competitions %}
				<option value="{{ tournament.name }}~{{ competition.name }}">{{ competition.name }}</option>
			{% endfor %}
		</optgroup>
		<hr>
	{% endfor %}
</select>
	<p>
		<label for="profile">Playing experience</label>
		<textarea id="profile" name="profile" rows="6"></textarea>
	</p>
</details>

<details name="role" >
	<summary>I am a <strong>TEAM MANAGER</strong> looking for players to join my team at a tournament</summary>
	<p>
		<label for="teamName">Team name</label>
		<input id="teamName" name="teamName" type="text">
	</p>
	<p>
		<label for="teamManager">My team is looking for players in the following tournament competition:</label>
		<select id="teamManager" name="teamManager" size="10">
			{% for tournament in tournaments %}
				<optgroup label="{{ tournament.name }}, {{ tournament.location }} ({{ tournament.dates }})">
					{% for competition in tournament.competitions %}
						<option value="{{ tournament.name }}~{{ competition.name }}">{{ competition.name }}</option>
					{% endfor %}
				</optgroup>
				<hr>
			{% endfor %}
		</select>
	</p>
</details>

<details name="role" >
	<summary>I am a <strong>TOURNAMENT DIRECTOR</strong> looking to find players for my teams</summary>
	<p>Select all the tournament competitions that are looking for players<br>
	(hold the ctrl/cmd key to select multiple competitions)
	</p>
	<p>
		<select id="tournamentDirector" name="tournamentDirector" size="10" multiple>
			{% for tournament in tournaments %}
				<optgroup label="{{ tournament.name }}, {{ tournament.location }} ({{ tournament.dates }})">
					{% for competition in tournament.competitions %}
						<option value="{{ tournament.name }}~{{ competition.name }}">{{ competition.name }}</option>
					{% endfor %}
				</optgroup>
				<hr>
			{% endfor %}
		</select>
	</p>
</details>

Remember, we'll never share any of your details without your consent and we'll never sell your information to anyone.

<button>Send</button>
</form>
