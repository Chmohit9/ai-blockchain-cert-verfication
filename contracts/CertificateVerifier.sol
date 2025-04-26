// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract CertificateVerifier {
    // Maps certificate hashes to verification status
    mapping(string => bool) private _certificateHashes;
    
    // Emitted when a new hash is stored
    event HashStored(string indexed hash, address indexed sender);
    
    /**
     * @dev Stores a certificate hash on-chain
     * @param _hash The SHA-256 hash of the certificate data
     */
    function storeHash(string calldata _hash) external {
        require(bytes(_hash).length == 64, "Invalid hash length");
        _certificateHashes[_hash] = true;
        emit HashStored(_hash, msg.sender);
    }

    /**
     * @dev Verifies a certificate hash
     * @param _hash The hash to verify
     * @return bool True if hash exists
     */
    function verifyHash(string calldata _hash) external view returns (bool) {
        return _certificateHashes[_hash];
    }
}