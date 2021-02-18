export async function getAllSenateMembers(headers) {
  const url = `https://api.propublica.org/congress/v1/117/senate/members.json`;

  const response = await fetch(url, headers);
  const { results } = await response.json();

  return {
    results,
  };
}

export async function getAllHouseMembers(headers) {
  const url = `https://api.propublica.org/congress/v1/117/house/members.json`;

  const response = await fetch(url, headers);
  const { results } = await response.json();

  return {
    results,
  };
}

export async function getMemberById(memberId, headers) {
  const url = `https://api.propublica.org/congress/v1/members/${memberId}.json`;

  const response = await fetch(url, headers);
  const { results } = await response.json();
  return {
    results,
  };
}

export async function getHouseMemberByState(state, district, headers) {
  const url = `https://api.propublica.org/congress/v1/members/house/${state}/${district}/current.json`;

  const response = await fetch(url, headers);
  const { results } = await response.json();

  return {
    results,
  };
}

export async function getSenateMemberByState(state, headers) {
  const url = `https://api.propublica.org/congress/v1/members/senate/${state}/current.json`;

  const response = await fetch(url, headers);
  const { results } = await response.json();

  return {
    results,
  };
}

export async function getVotingPositions(memberId, headers) {
  const url = `https://api.propublica.org/congress/v1/members/${memberId}/votes.json`;

  const response = await fetch(url, headers);
  const { results } = await response.json();
  console.log(results);
  return {
    results,
  };
}
