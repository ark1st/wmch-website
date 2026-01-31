# WSL2 포트 포워딩 스크립트
# 관리자 권한으로 실행 필요

# WSL2 IP 주소 가져오기
$wslIP = (wsl hostname -I).Trim()
Write-Host "WSL2 IP: $wslIP"

# Windows IP 주소
$windowsIP = "192.168.45.33"
Write-Host "Windows IP: $windowsIP"

# 기존 포트 포워딩 규칙 삭제 (있다면)
netsh interface portproxy delete v4tov4 listenport=8000 listenaddress=$windowsIP

# 새 포트 포워딩 규칙 추가
netsh interface portproxy add v4tov4 listenport=8000 listenaddress=$windowsIP connectport=8000 connectaddress=$wslIP

# 방화벽 규칙 추가
netsh advfirewall firewall delete rule name="WSL2 Web Server"
netsh advfirewall firewall add rule name="WSL2 Web Server" dir=in action=allow protocol=TCP localport=8000

Write-Host "`n포트 포워딩 설정 완료!"
Write-Host "핸드폰에서 접속: http://$windowsIP:8000"
Write-Host "`n현재 포트 프록시 규칙:"
netsh interface portproxy show all
