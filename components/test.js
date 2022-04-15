import React from 'react'

export default function test() {
  return (
    return power ? (
    <div>
      <div className='flex justify-center pl-0 pr-5 mt-5'>
        <p className='text-center text-black text-2xl font-bold'>Switch</p>
      </div>
      <p className='text-center font-bold text-xs pr-5 mt-1'>Turn to On</p>
      <div
        className='switch-button flex justify-center pl-0 pr-80'
        style={{
          backgroundColor: '#fffdd0',
          border: '1px solid black',
          borderRadius: '30px',
          width: '50',
          height: '42px',
          margin: '15px auto',
        }}
      >
        <div // turn OFF
          className='button-switch bg-red-600'
          style={{ float: 'left' }}
        >
          <p className='text-center text-white font-bold '>OFF</p>
        </div>
      </div>
      <div className='md:max-w-2xl'>
        <div className='flex justify-center pl-0 pr-5 mt-5'>
          <p className='font-bold text-2xl'>Power</p>
        </div>
        <div
          className='switch-button flex pl-0 pr-80'
          style={{
            backgroundColor: '#fffdd0',
            border: '1px solid black',
            borderRadius: '30px',
            width: '50',
            height: '42px',
            margin: '15px auto',
          }}
        >
          <div // turn OFF
            className={`button-switch bg-red-600 ${active && 'bg-red-800 '}`}
            style={{ float: 'right' }}
            onClick={() => setPower(!power)}
          >
            <p className='text-center text-white font-bold '>OFF</p>
          </div>
        </div>
      </div>

      {/* SOUND */}
      <div className='grid grid-cols-3 grid-rows-3 gap-4'>
        {collectionOne.map((s) => (
          <div className='text-center'>
            <div
              key={s.id}
              type='button'
              className={` bg-red-300 w-full h-full text-sm font-bold  p-10  button-active drum-pad`}
            >
              <audio className='clip'></audio>
              {s.keyid}
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : powerKeys ? (
    <div>
      {/* RECORDING Switch ON if powerKeys === true
          otherwise it power === false 
          otherwise it powerKeys === false 
          it means AFRICAN BONGO === ON
          */}
      <div className='text-center text-lg font-bold pl-0 pr-5 mt-2 mb-2'>
        {recording && (
          <>
            <button
              onClick={playRecording}
              className='button-switchRC bg-green-400 hover:bg-green-500 active:bg-green-600'
            >
              <p className='text-white font-bold'>Play</p>
            </button>
            <button
              onClick={() => setRecording('')}
              className='button-switchRC bg-red-400 hover:bg-red-500 active:bg-red-600 transform:0.95'
            >
              <p className='text-white font-bold'>Clear</p>
            </button>
            <p>Speed</p>
            <input
              type='range'
              step='0.01'
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
              max='1.4'
              min='0.1'
              className='text-center w-50 '
            />
          </>
        )}
      </div>
      {/* VOLUME Switch ON if powerKeys === false
          otherwise it AFRICAN BONGO === ON
          */}
      <h4 className='flex justify-center pl-0 pr-5 font-bold text-2xl'>
        Volume
      </h4>
      <div className='flex justify-center pl-0 pr-5 mt-2'>
        <input
          type='range'
          step='0.01'
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          max='1'
          min='0'
          className='text-center w-50 bg-black'
        />
        <p className='font-bold'> {volume}</p>
      </div>
      {/* POWER */}
      <div className='flex justify-center pl-0 pr-5 mt-5'>
        <p className='text-center text-black text-2xl font-bold'>Switch</p>
      </div>
      <p className='text-center font-bold text-xs pr-5 mt-1'>African Bongo</p>
      <div
        className='switch-button flex justify-center pl-0 pr-80'
        style={{
          backgroundColor: '#fffdd0',
          border: '1px solid black',
          borderRadius: '30px',
          width: '50',
          height: '42px',
          margin: '15px auto',
        }}
      >
        <div // turn OFF
          className='button-switch bg-red-600'
          style={{ float: 'left' }}
          onClick={() => setPowerKeys(!powerKeys)}
        >
          <p className='text-center text-white font-bold '>OFF</p>
        </div>
      </div>
      <div className='md:max-w-2xl'>
        <div className='flex justify-center pl-0 pr-5 mt-5'>
          <p className='font-bold text-2xl'>Power</p>
        </div>
        <div
          className='switch-button flex justify-center pl-80 pr-0'
          style={{
            backgroundColor: '#fffdd0',
            border: '1px solid black',
            borderRadius: '30px',
            width: '50',
            height: '42px',
            margin: '15px auto',
          }}
        >
          <div // turn ON
            className='button-switch bg-green-700'
            style={{ float: 'right' }}
            onClick={() => setPower(!power)}
          >
            <p className='text-center text-white font-bold '>ON</p>
          </div>
        </div>
      </div>

      {/* SOUND */}
      <div className='grid grid-flow-col grid-cols-3 grid-rows-3 gap-4'>
        {collectionOne.map((soundObj) => (
          <Pad
            power={power}
            key={soundObj.id}
            soundObj={soundObj}
            volume={volume}
            setRecording={setRecording}
          />
        ))}
      </div>
    </div>
  ) : (
    <div>
      {/* RECORDING Switch ON if powerKeys === false
          otherwise it power === false 
          otherwise it powerKeys === false 
          it means PIANO && DRUMS === ON
          */}
      <div className='text-center text-lg font-bold pl-0 pr-5 mt-2 mb-2'>
        {recording && (
          <>
            <button
              onClick={playRecording}
              className='button-switchRC bg-green-400 hover:bg-green-500 active:bg-green-600'
            >
              <p className='text-white font-bold'>Play</p>
            </button>
            <button
              onClick={() => setRecording('')}
              className='button-switchRC bg-red-400 hover:bg-red-500 active:bg-red-600 transform:0.95'
            >
              <p className='text-white font-bold'>Clear</p>
            </button>
            <p>Speed</p>
            <input
              type='range'
              step='0.01'
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
              max='1.4'
              min='0.1'
              className='text-center w-50 '
            />
          </>
        )}
      </div>
      <h4 className='flex justify-center pl-0 pr-5 font-bold text-2xl'>
        Volume
      </h4>
      <div className='flex justify-center pl-0 pr-5 mt-2'>
        <input
          type='range'
          step='0.01'
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          max='1'
          min='0'
          className='text-center w-50 bg-black'
        />
        <p className='font-bold'> {volume}</p>
      </div>
      {/* POWER */}
      <div className='flex justify-center pl-0 pr-5 mt-5'>
        <p className='text-center text-black text-2xl font-bold'>Switch</p>
      </div>
      <p className='text-center font-bold text-xs pr-5 mt-1'>Piano && Drum</p>
      <div
        className='switch-button flex justify-center pl-80 pr-0'
        style={{
          backgroundColor: '#fffdd0',
          border: '1px solid black',
          borderRadius: '30px',
          width: '50',
          height: '42px',
          margin: '15px auto',
        }}
      >
        <div // turn ON
          className='button-switch bg-green-700'
          style={{ float: 'right' }}
          onClick={() => setPowerKeys(!powerKeys)}
        >
          <p className='text-center text-white font-bold '>ON</p>
        </div>
      </div>
      <div className='md:max-w-2xl'>
        <div className='flex justify-center pl-0 pr-5 mt-5'>
          <p className='font-bold text-2xl'>Power</p>
        </div>
        <div
          className='switch-button flex justify-center pl-80 pr-0'
          style={{
            backgroundColor: '#fffdd0',
            border: '1px solid black',
            borderRadius: '30px',
            width: '50',
            height: '42px',
            margin: '15px auto',
          }}
        >
          <div // turn ON
            className='button-switch bg-green-700'
            style={{ float: 'right' }}
            onClick={() => setPower(!power)}
          >
            <p className='text-center text-white font-bold '>ON</p>
          </div>
        </div>
      </div>

      {/* SOUND */}
      <div className='grid grid-flow-col grid-cols-3 grid-rows-3 gap-4'>
        {collectionTwo.map((sndObj) => (
          <Pad
            power={power}
            key={sndObj.id}
            soundObj={sndObj}
            volume={volume}
            setRecording={setRecording}
          />
        ))}
      </div>
    </div>
  );
  )
}
