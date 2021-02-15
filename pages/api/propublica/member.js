import React, { useEffect } from 'react';
import { headers } from './headers.js';

export async function getAllSenateMembers() {
  const url = `https://api.propublica.org/congress/v1/117/senate/members.json`;

  const response = await fetch(url, headers);
  const data = await response.json();
  console.log(data);

  return {
    data,
  };
}

export async function getAllHouseMembers() {
  const url = `https://api.propublica.org/congress/v1/117/house/members.json`;

  const response = await fetch(url, headers);
  const data = await response.json();
  console.log(data);

  return {
    data,
  };
}

export async function getMemberById(memberId) {
  const url = `https://api.propublica.org/congress/v1/members/${memberId}.json`;

  const response = await fetch(url, headers);
  const data = await response.json();
  console.log(data);

  return {
    data,
  };
}

export async function getHouseMemberByState(state, district) {
  const url = `https://api.propublica.org/congress/v1/members/house/${state}/${district}/current.json`;

  const response = await fetch(url, headers);
  const data = await response.json();
  console.log(data);

  return {
    data,
  };
}

export async function getSenateMemberByState(state) {
  const url = `https://api.propublica.org/congress/v1/members/senate/${state}/current.json`;

  const response = await fetch(url, headers);
  const data = await response.json();
  console.log(data);

  return {
    data,
  };
}

const Member = ({ data }) => {
  useEffect(() => {
    // getAllSenateMembers()
    // getAllHouseMembers()
    // getMemberById('O000172')
  });

  return (
    <div>
      <h1>Member</h1>
      <p>k</p>
    </div>
  );
};

export default Member;
