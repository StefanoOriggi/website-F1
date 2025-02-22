namespace Progetto.Models;
public class Player
{
    public string? idPlayer { get; set; }
    public string? idTeam { get; set; }  // ID della squadra
    public string? idTeam2 { get; set; }
    public object? idTeamNational { get; set; }
    public object? idAPIfootball { get; set; }
    public object? idPlayerManager { get; set; }
    public string? idWikidata { get; set; }
    public object? idTransferMkt { get; set; }
    public object? idESPN { get; set; }
    public string? strNationality { get; set; }
    public string? strPlayer { get; set; }
    public string? strPlayerAlternate { get; set; }
    public string? strTeam { get; set; }  // Nome della squadra
    public string? strTeam2 { get; set; }
    public string? strSport { get; set; }
    public object? intSoccerXMLTeamID { get; set; }
    public string? dateBorn { get; set; }
    public object? dateDied { get; set; }
    public string? strNumber { get; set; }
    public object? dateSigned { get; set; }
    public string? strSigning { get; set; }
    public string? strWage { get; set; }
    public string? strOutfitter { get; set; }
    public string? strKit { get; set; }
    public string? strAgent { get; set; }
    public string? strBirthLocation { get; set; }
    public string? strEthnicity { get; set; }
    public string? strStatus { get; set; }
    public string? strDescriptionEN { get; set; }
    public object? strDescriptionDE { get; set; }
    public object? strDescriptionFR { get; set; }
    public object? strDescriptionCN { get; set; }
    public object? strDescriptionIT { get; set; }
    public object? strDescriptionJP { get; set; }
    public object? strDescriptionRU { get; set; }
    public object? strDescriptionES { get; set; }
    public object? strDescriptionPT { get; set; }
    public object? strDescriptionSE { get; set; }
    public object? strDescriptionNL { get; set; }
    public object? strDescriptionHU { get; set; }
    public object? strDescriptionNO { get; set; }
    public object? strDescriptionIL { get; set; }
    public object? strDescriptionPL { get; set; }
    public string? strGender { get; set; }
    public string? strSide { get; set; }
    public string? strPosition { get; set; }
    public object? strCollege { get; set; }
    public string? strFacebook { get; set; }
    public string? strWebsite { get; set; }
    public string? strTwitter { get; set; }
    public string? strInstagram { get; set; }
    public string? strYoutube { get; set; }
    public string? strHeight { get; set; }
    public string? strWeight { get; set; }
    public string? intLoved { get; set; }
    public string? strThumb { get; set; }
    public string? strCutout { get; set; }
    public string? strRender { get; set; }
    public string? strBanner { get; set; }
    public string? strFanart1 { get; set; }
    public string? strFanart2 { get; set; }
    public string? strFanart3 { get; set; }
    public string? strFanart4 { get; set; }
    public string? strCreativeCommons { get; set; }
    public string? strLocked { get; set; }

    public Team? Team { get; set; }
    public List<Player>? player { get; set; }
}