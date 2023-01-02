async function sign(devId, targetFile, appleId, password, teamId, tools){
    const {$, echo} = tools;
    echo("Zipping...");
    echo(devId);
    const zipRes = await $`zip -r ${targetFile}.zip ${targetFile}`;
    const cleanRes = await $`rm -r ${targetFile}`;
    const noteRes = await $`xcrun notarytool submit ${targetFile}.zip --apple-id ${appleId} --password ${password} --team-id ${teamId} --wait`;
    const unzipRes = await $`unzip ${targetFile}.zip`;
    const rmZipRes = await $`rm ${targetFile}.zip`;
    const stapleRes = await $`xcrun stapler staple ${targetFile}`;
    return {zipRes, cleanRes, noteRes,unzipRes,rmZipRes, stapleRes};
}

export default sign;