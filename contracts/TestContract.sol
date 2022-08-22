// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract TestContract {
  event MyMessage(string txt);
  function printHello() public {
    emit MyMessage("Hellow, World");
  }
}