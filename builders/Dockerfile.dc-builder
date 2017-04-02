FROM ubuntu:trusty

# Based on instructions from:
# https://docs.docker.com/engine/installation/linux/ubuntu/
RUN \
   apt-get -y update && \
   apt-get -y install apt-transport-https ca-certificates curl \
       # These are necessary for add-apt-respository
       software-properties-common python-software-properties && \
   curl -fsSL https://yum.dockerproject.org/gpg | sudo apt-key add - && \
   add-apt-repository \
       "deb https://apt.dockerproject.org/repo/ \
       ubuntu-$(lsb_release -cs) \
       main" && \
   apt-get -y update && \
   apt-get -y install docker-engine=1.9.1-0~trusty && \
   curl -L "https://github.com/docker/compose/releases/download/1.11.2/docker-compose-$(uname -s)-$(uname -m)" \
   > /usr/local/bin/docker-compose && \
  chmod +x /usr/local/bin/docker-compose

ENTRYPOINT ["/usr/local/bin/docker-compose"]