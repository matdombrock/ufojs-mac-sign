async function sign(devId, targetFile, tools){
    const {$, echo} = tools;
    echo("Signing...");
    echo(devId);
    const signRes = await $`codesign --force -s ${"Developer ID Application: "+devId} -v ${targetFile} --deep --strict --options=runtime --timestamp`;
    return signRes;
}

export default sign;