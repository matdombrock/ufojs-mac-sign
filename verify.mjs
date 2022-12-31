async function verify(verbose, targetFile, tools){
    const {$, echo, prompt} = tools;
    echo("Checking Signanature...");
    const signCheckRes = await $`codesign -dv --verbose=${verbose} ${targetFile}`;
    return signCheckRes;
}

export default verify;