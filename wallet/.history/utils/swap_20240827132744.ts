import { ethers } from 'ethers';

export const executeSwap = async (quote: any) => {
  if (!window.ethereum) {
    alert('No Ethereum provider found');
    return;
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  try {
    const txResponse = await signer.sendTransaction({
      to: quote.to,
      data: quote.data,
      value: ethers.BigNumber.from(quote.value),
      gasLimit: ethers.BigNumber.from(quote.gas),
      gasPrice: ethers.BigNumber.from(quote.gasPrice),
    });
    await txResponse.wait();
    alert('Swap executed successfully');
  } catch (error) {
    console.error('Swap execution error:', error);
    alert('Swap execution failed');
  }
};
