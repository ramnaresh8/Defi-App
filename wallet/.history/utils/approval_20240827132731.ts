import { ethers } from 'ethers';

export const approveToken = async (spender: string, tokenAddress: string, amount: string) => {
  if (!window.ethereum) {
    alert('No Ethereum provider found');
    return;
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const tokenContract = new ethers.Contract(
    tokenAddress,
    ['function approve(address spender, uint256 amount) public returns (bool)'],
    signer
  );

  try {
    const tx = await tokenContract.approve(spender, amount);
    await tx.wait();
    alert('Token approval successful');
  } catch (error) {
    console.error('Token approval error:', error);
    alert('Token approval failed');
  }
};
