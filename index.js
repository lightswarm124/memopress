let BITBOXCli = require('bitbox-cli/lib/bitboxcli').default;
let BITBOX = new BITBOXCli({
  protocol: 'http',
  host: '127.0.0.1',
  port: 8332,
  username: '',
  password: '',
  corsproxy: 'remote'
});
let _ = require('underscore');

// Missing Prefixes: 6d08, 6d09, 6d0f, 6d11, 6d12
// Planned Prefixes: 6d0b, 6d24
let memoPrefixes = ['0x6d01', '0x6d02', '0x6d03', '0x6d04', '0x6d05', '0x6d06', '0x6d07', '0x6d0A', '0x6d0C', '0x6d0D', '0x6d0E', '0x6d10', '0x6d13', '0x6d14'];
let memoConvertedPrefixes = [365, 621, 877, 1133, 1389, 1645, 1901, 2669, 3181, 3437, 3693, 4205, 4973, 5229];

let blockpressPrefixes = ['0x8d01', '0x8d02', '0x8d03', '0x8d04', '0x8d06', '0x8d07', '0x8d08', '0x8d09', '0x8d10', '0x8d11'];
let blockpressConvertedPrefixes = [397, 653, 909, 1165, 1933, 2189, 2445, 4237, 4493];

// Unimplemented Prefixes: 6d10, 6d13, 6d14
exports.encode = (prefix, value) => {
  let data;
  let script;
  if(_.includes(memoPrefixes, prefix)){
    if(prefix === '0x6d01') {
      script = [BITBOX.Script.opcodes.OP_RETURN, Buffer.from('6d01', 'hex'), Buffer.from(value)];
    } else if(prefix === '0x6d02') {
      script = [BITBOX.Script.opcodes.OP_RETURN, Buffer.from('6d02', 'hex'), Buffer.from(value)];
    } else if(prefix === '0x6d03') {
      script = [BITBOX.Script.opcodes.OP_RETURN, Buffer.from('6d03', 'hex'), Buffer.from(value.txHash.match(/[a-fA-F0-9]{2}/g).reverse().join(''), 'hex'), Buffer.from(value.message)];
    } else if(prefix === '0x6d04') {
      script = [BITBOX.Script.opcodes.OP_RETURN, Buffer.from('6d04', 'hex'), Buffer.from(value.match(/[a-fA-F0-9]{2}/g).reverse().join(''), 'hex')];
    } else if(prefix === '0x6d05') {
      script = [BITBOX.Script.opcodes.OP_RETURN, Buffer.from('6d05', 'hex'), Buffer.from(value)];
    } else if(prefix === '0x6d06') {
      script = [BITBOX.Script.opcodes.OP_RETURN, Buffer.from('6d06', 'hex'), Buffer.from(value)];
    } else if(prefix === '0x6d07') {
      script = [BITBOX.Script.opcodes.OP_RETURN, Buffer.from('6d07', 'hex'), Buffer.from(value)];
    } else if(prefix === '0x6d0A') {
      script = [BITBOX.Script.opcodes.OP_RETURN, Buffer.from('6d0A', 'hex'), Buffer.from(value)];
    } else if(prefix === '0x6d0C') {
      script = [BITBOX.Script.opcodes.OP_RETURN, Buffer.from('6d0C', 'hex'), Buffer.from(value.topic), Buffer.from(value.message)];
    } else if(prefix === '0x6d0D') {
      script = [BITBOX.Script.opcodes.OP_RETURN, Buffer.from('6d0D', 'hex'), Buffer.from(value)];
    } else if(prefix === '0x6d0E') {
      script = [BITBOX.Script.opcodes.OP_RETURN, Buffer.from('6d0E', 'hex'), Buffer.from(value)];
    } else if(prefix === '0x6d10') {
      script = [BITBOX.Script.opcodes.OP_RETURN, Buffer.from('6d10', 'hex'), Buffer.from(value.poll_type), Buffer.from(value.option), Buffer.from(value.question)];
    } else if(prefix === '0x6d13') {
      script = [BITBOX.Script.opcodes.OP_RETURN, Buffer.from('6d13', 'hex'), Buffer.from(value.match(/[a-fA-F0-9]{2}/g).reverse().join(''), 'hex'), Buffer.from(value.option)];
    } else if(prefix === '0x6d14') {
      script = [BITBOX.Script.opcodes.OP_RETURN, Buffer.from('6d14', 'hex'), Buffer.from(value.match(/[a-fA-F0-9]{2}/g).reverse().join(''), 'hex'), Buffer.from(value.comment)];
    }
  } else if(_.includes(blockpressPrefixes, prefix)){
    if(prefix === '0x8d01') {
      script = [BITBOX.Script.opcodes.OP_RETURN, Buffer.from('8d01', 'hex'), Buffer.from(value)];
    } else if(prefix === '0x8d02') {
      script = [BITBOX.Script.opcodes.OP_RETURN, Buffer.from('8d02', 'hex'), Buffer.from(value)];
    } else if(prefix === '0x8d03') {
      script = [BITBOX.Script.opcodes.OP_RETURN, Buffer.from('8d03', 'hex'), Buffer.from(value.txHash, 'hex'), Buffer.from(value.message)];
    } else if(prefix === '0x8d04') {
      script = [BITBOX.Script.opcodes.OP_RETURN, Buffer.from('8d04', 'hex'), Buffer.from(value.match(/[a-fA-F0-9]{2}/g).reverse().join(''), 'hex')];
    } else if(prefix === '0x8d06') {
      script = [BITBOX.Script.opcodes.OP_RETURN, Buffer.from('8d06', 'hex'), Buffer.from(value)];
    } else if(prefix === '0x8d07') {
      script = [BITBOX.Script.opcodes.OP_RETURN, Buffer.from('8d07', 'hex'), Buffer.from(value)];
    } else if(prefix === '0x8d08')  {
      script = [BITBOX.Script.opcodes.OP_RETURN, Buffer.from('8d08', 'hex'), Buffer.from(value)];
    } else if(prefix === '0x8d09') {
      script = [BITBOX.Script.opcodes.OP_RETURN, Buffer.from('8d09', 'hex'), Buffer.from(value.mediaType, 'hex'), Buffer.from(value.mediaPayload), Buffer.from(value.mediaText)];
    } else if(prefix === '0x8d10') {
      script = [BITBOX.Script.opcodes.OP_RETURN, Buffer.from('8d10', 'hex'), Buffer.from(value)];
    } else if(prefix === '0x8d11') {
      script = [BITBOX.Script.opcodes.OP_RETURN, Buffer.from('8d11', 'hex'), Buffer.from(value.community), Buffer.from(value.message)];
    }
  }
  return BITBOX.Script.encode(script)
};

exports.decode = (op_return) => {

  let split = op_return.split(" ");
  let prefix = +split[1];
  let data;
  if(_.includes(memoConvertedPrefixes, prefix)){

    let memo = [
      ['6d01', 365, 'Set Name'],
      ['6d02', 621, 'Post Memo'],
      ['6d03', 877, 'Reply'],
      ['6d04', 1133, 'Like'],
      ['6d05', 1389, 'Set Profile Text'],
      ['6d06', 1645, 'Follow'],
      ['6d07', 1901, 'Unfollow'],
      ['6d0A', 2669, 'Set profile picture'],
      ['6d0C', 3181, 'Post Topic Message'],
      ['6d0D', 3437, 'Topic follow'],
      ['6d0E', 3693, 'Topic unfollow'],
      ['6d10', 4205, 'Create poll'],
      ['6d13', 4973, 'Add poll option'],
      ['6d14', 5229, 'Poll vote']
    ];

    memo.forEach((val, index) => {
      if(prefix === val[1]) {
        let asm
        if (prefix === 4205) {
          asm = `${split[0]} ${memo[index][0]} ${split[4]}`;
        } else if (prefix === 877 || prefix === 3181) {
          asm = `${split[0]} ${memo[index][0]} ${split[3]}`;
        } else {
          asm = `${split[0]} ${memo[index][0]} ${split[2]}`;
        }
        let fromASM = BITBOX.Script.fromASM(asm)
        let decoded = BITBOX.Script.decode(fromASM)
        data = {
          service: 'memo',
          prefix: `0x${memo[index][0]}`,
          action: memo[index][2],
          message: decoded[2].toString('ascii')
        };
      }
    });
  } else if(_.includes(blockpressConvertedPrefixes, prefix)){

    let blockpress = [
      ['8d01', 397, 'Set Name'],
      ['8d02', 653, 'Create Text Post'],
      ['8d03', 909, 'Reply'],
      ['8d04', 1165, 'Like'],
      ['8d06', 1677, 'Follow'],
      ['8d07', 1933, 'Unfollow'],
      ['8d08', 2189, 'Set Profile Header'],
      ['8d09', 2445, 'Create Media Post'],
      ['8d10', 4237, 'Set Profile Avatar'],
      ['8d11', 4493, 'Create Post in Community']
    ];

    blockpress.forEach((val, index) => {
      if(prefix === val[1]) {
        let asm
        if(prefix === 2445 || prefix === 4493) {
          asm = `${split[0]} ${blockpress[index][0]} ${split[3]}`;
        } else {
          asm = `${split[0]} ${blockpress[index][0]} ${split[2]}`;
        }

        let fromASM = BITBOX.Script.fromASM(asm);
        let decoded = BITBOX.Script.decode(fromASM);

        data = {
          service: 'blockpress',
          prefix: `0x${blockpress[index][0]}`,
          action: blockpress[index][2],
          message: decoded[2].toString('ascii')
        };
      }
    });
  }

  return data;
}
